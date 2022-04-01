import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { IRoute, privateRoutes, publicRoutes, RouteNames } from '@src/router';
import { getLastRoute, setLastRoute } from '@src/helpers/localStorage';

interface AppRouterProps {
    isAuth: boolean
}

const AppRouter: React.FC<AppRouterProps> = ({ isAuth }) => {

    const nav = useNavigate();

    useEffect(() => {
        nav(JSON.parse(getLastRoute() || '{}'));
        window.onbeforeunload = () => {
            setLastRoute(JSON.stringify(window.location.pathname));
        };
    }, []);

    if (!isAuth) {
        return (
            <Routes>
                { publicRoutes.map((route: IRoute) =>
                    <Route
                        path={ route.path }
                        key={ route.path }
                        element={ route.element }
                    />,
                ) }
                <Route path='*' element={ <Navigate replace to={ RouteNames.LOGIN }/> }/>
            </Routes>
        );
    } else {
        return (
            <Routes>
                { privateRoutes.map((route: IRoute) =>
                    <Route
                        path={ route.path }
                        key={ route.path }
                        element={ route.element }
                    />,
                ) }
                <Route path='*' element={ <Navigate replace to={ RouteNames.DASHBOARD }/> }/>
            </Routes>
        );
    }
};

export default AppRouter;
