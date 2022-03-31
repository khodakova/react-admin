import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Layout from '@src/layouts';

const App: React.FC = () => {
    return (
        <Router>
            <Layout />
            <ToastContainer />
        </Router>
    );
};

export default App;
