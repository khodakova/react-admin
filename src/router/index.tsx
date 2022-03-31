import React from 'react';
import { lazy } from 'react';

const Login = lazy(() => import('@src/pages/login'));
const Dashboard = lazy(() => import('@src/pages/dashboard'));
const Tab1 = lazy(() => import('@src/pages/dashboard/components/tab1'));
const Tab2 = lazy(() => import('@src/pages/dashboard/components/tab2'));

export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    LOGIN = '/login',
    DASHBOARD = '/',
    TAB1 = '/tab1',
    TAB2 = '/tab2',
}

export interface IMenuItem {
    name: string;
    to: string;
    label: string;
}

export const HEADERS: Array<IMenuItem> = [
    {
        name: '1',
        to: '/',
        label: 'Dashboard',
    },
    {
        name: '2',
        to: '/tab1',
        label: 'Menu 1',
    },
    {
        name: '3',
        to: '/tab2',
        label: 'Menu 2',
    },
];

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: <Login/> },
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.DASHBOARD, element: <Dashboard/> },
    { path: RouteNames.TAB1, element: <Tab1/> },
    { path: RouteNames.TAB2, element: <Tab2/> },
];