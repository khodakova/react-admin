import PasswordNotVisible from '@icons/password-not-visible.svg';
import PasswordVisible from '@icons/password-visible.svg';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';

import {useCapsLock} from '@src/hooks/useCapsLock';
import {HEADERS, RouteNames} from '@src/router';
import {useStore} from '@src/store/store';

import logo from '@images/logo.png';

// схема валидации для вывода ошибок при вводе
const validationSchema = yup.object({
    password: yup
        .string()
        .required('Необходимо ввести пароль!')
        .min(4, 'Пароль должен содержать минимум 4 символа')
        .max(50, 'Слишком много символов'),
});

interface ICredentials {
    password: string;
}

const Login: React.FC = () => {
    const {
        authStore: {login},
        commonStore: {setSection},
    } = useStore();
    const {caps, onKeyDown} = useCapsLock();
    const [passVisible, setPassVisible] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: ICredentials) => {
            login(values.password)
                .then(() => navigate(RouteNames.DASHBOARD))
                .then(() => setSection(HEADERS[0]));
        },
    });

    const handleClick = () => {
        setPassVisible(!passVisible);
    };

    return (
        <div className="login">
            <div className="bg" />
            <form onSubmit={formik.handleSubmit}>
                <header>
                    <img src={logo} />
                </header>
                <div className="inputs">
                    {caps && (
                        <div className="inputs__warning">Включен CAPS LOCK</div>
                    )}
                    <div className="inputs__item">
                        <input
                            type={passVisible ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            onKeyDown={onKeyDown}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name={'password'}
                        />
                        <div className="inputs__icon" onClick={handleClick}>
                            {passVisible ? (
                                <PasswordVisible fill="#fff" />
                            ) : (
                                <PasswordNotVisible fill="#fff" />
                            )}
                        </div>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="inputs__error">
                            {formik.errors.password}
                        </div>
                    )}
                    <button>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
