import {makeAutoObservable} from 'mobx';

import {deleteToken, getToken, saveToken} from '@src/helpers/localStorage';
import ServerError from '@src/models/ServerError';
import {User} from '@src/models/User';
import {HEADERS, IMenuItem} from '@src/router';

class CommonStore {
    error: ServerError | null = null;
    token: string | null = null;
    currentUser: User | null = null;
    isAuth = false;
    appLoaded = false;
    isSidePanel = false;
    section: IMenuItem = HEADERS[0];

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * Установка статуса авторизованности
     * @param bool
     */
    setIsAuth = (bool: boolean) => {
        this.isAuth = bool;
    };

    /**
     * Установка токена в стор и sessionStorage
     * @param token
     */
    setToken = (token: string | null, remember = false) => {
        if (token != null) {
            saveToken(token, remember);
            this.token = token;
        }
    };

    /**
     * Установкапользователя в sessionStorage
     * @param user
     */
    setUser = (user: User) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.currentUser = user;
    };

    /**
     * Удаление токена при выходе из приложения
     */
    removeToken = () => {
        deleteToken();
        this.token = null;
    };

    /**
     * Удаление пользователя при выходе из приложения
     */
    removeUser = () => {
        sessionStorage.removeItem('user');
        this.currentUser = {} as User;
    };

    setAppLoaded = () => {
        this.appLoaded = true;
    };

    /**
     * Изменение состояния видимости бокового меню
     */
    setIsSidePanel = () => {
        this.isSidePanel = !this.isSidePanel;
    };

    /**
     * Установка рабочей секции по маршруту
     * @param section
     */
    setSection = (section: IMenuItem) => {
        this.section = section;
    };

    /**
     * Проверка авторизованности
     */
    checkAuth = () => {
        this.setIsAuth(!!getToken());
    };

    reset = () => {
        this.setIsAuth(false);
        this.removeToken();
        this.removeUser();
        this.isSidePanel = false;
    };
}

export default CommonStore;
