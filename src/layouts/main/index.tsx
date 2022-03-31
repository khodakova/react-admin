import React, {Suspense} from 'react';

import AppRouter from '@src/layouts/AppRouter';

import PageLoading from '@components/pageLoading';

const Main: React.FC = () => {
    return (
        <div id="main">
            <div className="home">
                <div className="container">
                    <Suspense fallback={<PageLoading show />}>
                        <AppRouter />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Main;
