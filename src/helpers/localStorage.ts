import { isBrowser } from '@src/utils';

const TOKEN_NAME = 'token';

export const saveToken = (token?: string) =>
    isBrowser && token
        ? localStorage.setItem(TOKEN_NAME, token)
        : null;

export const getToken = (): string | null =>
    isBrowser
        ? localStorage.getItem(TOKEN_NAME)
        : null;

export const deleteToken = () =>
    isBrowser
        ? localStorage.removeItem(TOKEN_NAME)
        : null;


const LAST_ROUTE_NAME = 'lastRoute';

export const setLastRoute = (lastRoute?: string) =>
    isBrowser && lastRoute
        ? localStorage.setItem(LAST_ROUTE_NAME, lastRoute)
        : null;

export const getLastRoute = (): string | null =>
    isBrowser
        ? localStorage.getItem(LAST_ROUTE_NAME)
        : null;

export const deleteLastRoute = () =>
    isBrowser
        ? localStorage.removeItem(LAST_ROUTE_NAME)
        : null;
