import axios from 'axios';

import {getToken, saveToken} from '@src/helpers/localStorage';

import {AuthResponse} from '../models/AuthResponse';

export const API_URL = 'https://jsonplaceholder.typicode.com/';

const $http = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

// перехватчик на запросы (установка заголовка Авторизация с токеном)
$http.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
});

// перехватчик на ответ
$http.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !originalRequest._isRetry
        ) {
            // если originalRequest опять возвращает 401 статус, интерсептор не должен отработать
            // для этого помечаем isRetry - отработал ли хотя бы один раз запрос на обновление токенов
            originalRequest._isRetry = true;
            try {
                const response = await axios.get<AuthResponse>(
                    `${API_URL}/refresh`,
                    {withCredentials: true},
                );
                saveToken(response.data.accessToken);
                return $http.request(originalRequest);
            } catch (e: any) {
                console.log('Пользователь не авторизован');
            }
        }
        throw error;
    },
);

export default $http;
