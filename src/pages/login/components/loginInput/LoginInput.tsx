import React from 'react';
import cn from 'classnames';

interface LoginInputProps extends React.HTMLProps<HTMLInputElement> {
    errors?: string,
    icon?: React.ReactElement,

    onClickIcon?(...arg: any): any
}

const LoginInput: React.FC<LoginInputProps> = ({
                                                   type,
                                                   value,
                                                   name,
                                                   errors,
                                                   placeholder,
                                                   icon,
                                                   onClickIcon,
                                                   onChange,
                                                   onKeyDown,
                                               }) => {
    return (
        <div className={
            cn('inputs__item', {'error': !!errors})
        }>
            <input
                type={ type }
                placeholder={ placeholder }
                onKeyDown={ onKeyDown }
                value={ value }
                onChange={ onChange }
                name={ name }
            />
            <div className="inputs__icon" onClick={ onClickIcon }>
                { icon }
            </div>
            { errors && (
                <div className="inputs__error">
                    { errors }
                </div>
            ) }
        </div>
    );
};

export default LoginInput;