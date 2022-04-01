import React, { Fragment, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { HEADERS } from '@src/router';

import { useStore } from '@src/store/store';
import { useLocation } from 'react-router';

import Footer from './footer';
import SidePanelMenu from '@src/layouts/sidepanelMenu';
import Header from './header';
import Main from './main';
import Login from '@src/pages/login';

const Layout: React.FC = () => {
    const { commonStore: { isAuth, setSection } } = useStore();
    const location = useLocation();

    useEffect(() => {
        const foundSection =
            HEADERS.find((item) => item.to === location.pathname) || HEADERS[0];
        setSection(foundSection);
    }, []);

    if (isAuth) {
        return (
            <Fragment>
                <Header/>
                <SidePanelMenu/>
                <Main/>
                <Footer/>
            </Fragment>
        );
    }

    return <Login/>;
};

export default observer(Layout);
