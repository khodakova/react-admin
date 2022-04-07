import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import $http from '@src/http/axiosInstance';

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;

class HttpRequest {
    baseRequest: AxiosInstance;

    constructor() {
        this.baseRequest = $http;
    }

    async get<T>(url: string, config?: AxiosRequestConfig) {
        return await this.baseRequest.get<T>(url, config).then(responseBody);
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
        return await this.baseRequest
            .post(url, data, config)
            .then(responseBody);
    }
}

export default new HttpRequest();
