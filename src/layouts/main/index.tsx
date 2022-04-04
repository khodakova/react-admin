import React, { Suspense } from 'react';
import cn from 'classnames';

import AppRouter from '@src/layouts/AppRouter';
import PageLoading from '@components/pageLoading';
import { useStore } from "@src/store/store";
import { observer } from "mobx-react-lite";

const Main: React.FC = () => {
    const { commonStore: { isAuth, isSidePanel } } = useStore();

    return (
        <div id="main">
            <div className={ cn('home', { 'is-sidepanel': isSidePanel }) }>
                <div className="container">
                    <Suspense fallback={ <PageLoading show/> }>
                        <AppRouter isAuth={ isAuth }/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default observer(Main);
