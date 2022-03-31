import React from 'react';
import LoginForm from '@src/pages/login/components/login/LoginForm';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { HEADERS, RouteNames } from '@src/router';
import { store } from '@src/store/store';
import { history } from '@src/index';

export interface ICredentials {
    email: string;
    password: string;
}

export interface IHelperCredentials {
    initialEmail?: string;
}

// схема валидации для вывода ошибок при вводе
const validationSchema = yup.object({
    email: yup
        .string()
        .required('Необходимо ввести e-mail')
        .email('E-mail введен неверно!')
        .max(50, 'Слишком много символов'),
    password: yup
        .string()
        .required('Необходимо ввести пароль!')
        .min(4, 'Пароль должен содержать минимум 4 символа')
        .max(50, 'Слишком много символов'),
});

const LoginFormContainer = withFormik<IHelperCredentials, ICredentials>({
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    validationSchema: validationSchema,

    handleSubmit: (values: ICredentials) => {
        store.authStore.login(values.password)
            .then(() => history.push(RouteNames.DASHBOARD))
            .then(() => store.commonStore.setSection(HEADERS[0]));
    },

    displayName: 'Login',
})(LoginForm);

export default LoginFormContainer;