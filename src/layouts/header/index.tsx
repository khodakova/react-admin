import LogoutSvg from '@icons/logout.svg';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {HEADERS, RouteNames} from '@src/router';
import {useStore} from '@src/store/store';

import logo from '@images/logo.png';

const Header: React.FC = () => {
    const {
        commonStore: {section, setSection, setIsSidepanelVisible},
        authStore: {logout},
    } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(RouteNames.LOGIN);
    };

    return (
        <header className="header">
            <a
                onClick={setIsSidepanelVisible}
                className="btn-menu-burger"
                href="#"
            >
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div className="logo-header">
                <Link to="/" className="box-img-flex">
                    <img width={60} src={logo} alt="logo" />
                </Link>
            </div>
            <div className="menu">
                <ul>
                    {HEADERS.map((item) => (
                        <li
                            onClick={() => setSection(item)}
                            key={item.name}
                            className={
                                section.name === item.name ? 'active' : ''
                            }
                        >
                            <Link to={item.to}>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                    <li onClick={handleLogout}>
                        <LogoutSvg className="header__logout" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default observer(Header);
