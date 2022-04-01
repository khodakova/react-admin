import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { useStore } from "@src/store/store";

import Layout from '@src/layouts';
import { observer } from "mobx-react-lite";
import { LinearProgress } from "@mui/material";

const App: React.FC = () => {
    const { commonStore: { appLoaded, checkAuth, setAppLoaded } } = useStore();

    useEffect(() => {
        checkAuth();
        setAppLoaded();
    }, []);

    if (!appLoaded) {
        return (
            <LinearProgress/>
        )
    }

    return (
        <Router>
            <Layout/>
            <ToastContainer/>
        </Router>
    );
};

export default observer(App);
