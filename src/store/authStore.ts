import {makeAutoObservable} from 'mobx';

import {history} from '@src/index';
import ServerError from '@src/models/ServerError';
import {ICredentials} from '@src/pages/login/containers/login/LoginForm';

import {store} from './store';

/**
 * Стор для авторизации пользователя в приложении
 */
class AuthStore {
    isLoading = false;
    error: ServerError | undefined = undefined;
    credentials: ICredentials = {
        email: '',
        password: '',
    };
    remember = true;

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * Сброс состояния стора
     */
    reset = () => {
        this.credentials.password = '';
        this.credentials.email = '';
        this.error = undefined;
        this.isLoading = false;
    };

    /**
     * Установка ошибки
     * @param error - ошибка, содержащая код, основное и дополнительное сообщения
     */
    setError(error: ServerError | undefined) {
        this.error = error;
    }

    /**
     * Установка пометки по текущему запросу к серверу
     * @param bool
     */
    setIsLoading = (bool: boolean) => {
        this.isLoading = bool;
    };

    setRemember = () => {
        this.remember = !this.remember;
    };

    /**
     * Вход в приложение с получением токена
     * @param password
     */
    login = async (password: string) => {
        this.setIsLoading(true);
        this.setError(undefined);
        try {
            // const res = await api.User.login(password);
            const res = {
                token: 'atata',
                id: 1,
                email: 'atata@atata.atata',
                name: 'atata',
            };
            // установка токена
            store.commonStore.setToken(res.token, this.remember);
            // установка пользователя
            store.commonStore.setUser({...res});
            // пометка о том, что пользователь авторизован
            store.commonStore.setIsAuth(true);
            if (this.remember) {
            }
        } catch (err: any) {
            console.log(err);
        } finally {
            this.setIsLoading(false);
            this.reset();
        }
    };

    /**
     * Выход из приложения с удалением токена и очищением информации по пользователю
     */
    logout() {
        store.commonStore.reset();
        history.push('/login');
    }
}

export default AuthStore;
