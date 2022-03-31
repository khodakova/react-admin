import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import '@src/styles/styles.scss';
import { createBrowserHistory } from 'history';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import { store, StoreContext } from './store/store';

export const history = createBrowserHistory();

ReactDom.render(
    <ErrorBoundary>
        <StoreContext.Provider value={ store }>
            <App/>
        </StoreContext.Provider>
    </ErrorBoundary>,
    document.getElementById('root'),
);
