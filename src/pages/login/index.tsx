import React from 'react';
import LoginFormContainer from '@src/pages/login/containers/login/LoginForm';

const Login = () => {
    return (
        <div className='login'>
            <div className="login__content">
                <div className="bg"/>
                <LoginFormContainer/>
            </div>
        </div>

    );
};

export default Login;