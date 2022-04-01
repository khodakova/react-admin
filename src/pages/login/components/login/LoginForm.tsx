import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { useCapsLock } from '@src/hooks/useCapsLock';
import logo from '@images/logo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginInput from '@src/pages/login/components/loginInput/LoginInput';
import Button from '@mui/material/Button';
import { ICredentials, IHelperCredentials } from '@src/pages/login/containers/login/LoginForm';
import { Checkbox } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@src/store/store';

const LoginForm = (props: IHelperCredentials & FormikProps<ICredentials>) => {
    const { touched, errors, handleSubmit, handleChange, values } = props;
    const { caps, onKeyDown } = useCapsLock();
    const [passVisible, setPassVisible] = useState(false);
    const { authStore: { remember, setRemember } } = useStore();

    const handleClick = () => {
        setPassVisible(!passVisible);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <header>
                <img src={ logo }/>
            </header>
            <div className="inputs">
                { caps && (
                    <div className="inputs__warning">Включен CAPS LOCK</div>
                ) }
                <LoginInput
                    type='email'
                    placeholder='Введите e-mail'
                    value={ values.email }
                    onChange={ handleChange }
                    name='email'
                    errors={ touched.email && errors.email || '' }
                />
                <LoginInput
                    type={ passVisible ? 'text' : 'password' }
                    placeholder="Введите пароль"
                    onKeyDown={ onKeyDown }
                    value={ values.password }
                    onChange={ handleChange }
                    name='password'
                    errors={ touched.password && errors.password || '' }
                    onClickIcon={ handleClick }
                    icon={ passVisible
                        ? <VisibilityOff
                            fill="#fff"
                            sx={ { color: 'white' } }
                        />
                        : <Visibility
                            fill="#fff"
                            sx={ { color: 'white' } }
                        /> }
                />
                <div className='inputs__remember'>
                    <Checkbox
                        color="secondary"
                        checked={ remember }
                        onChange={ setRemember }
                    />
                    <p>Запомнить?</p>
                </div>
                <Button
                    type='submit'
                    variant="contained"
                >
                    Войти
                </Button>
            </div>
        </form>
    );
};

export default observer(LoginForm);
