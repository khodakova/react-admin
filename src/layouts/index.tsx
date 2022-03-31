import {observer} from 'mobx-react-lite';
import React, {Fragment, useEffect} from 'react';
import {useLocation} from 'react-router';

import SidepanelMenu from '@src/layouts/sidepanelMenu';
import Login from '@src/pages/login';
import {HEADERS} from '@src/router';
import {useStore} from '@src/store/store';

import Footer from './footer';
import Header from './header';
import Main from './main';

const Layout: React.FC = () => {
    const {
        commonStore: {isAuth, setSection},
    } = useStore();

    const location = useLocation();

    useEffect(() => {
        const foundSection =
            HEADERS.find((item) => item.to === location.pathname) || HEADERS[0];
        setSection(foundSection);
    }, []);

    if (isAuth) {
        return (
            <Fragment>
                <Header />
                <SidepanelMenu />
                <Main />
                <Footer />
            </Fragment>
        );
    }

    return <Login />;
};

export default observer(Layout);
