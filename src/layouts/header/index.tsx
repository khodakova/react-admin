import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { HEADERS, IMenuItem, RouteNames } from '@src/router';
import { useStore } from '@src/store/store';
import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';

import logo from '@images/logo.png';

const Header: React.FC = () => {
    const {
        commonStore: {section, setSection, setIsSidepanelVisible, currentUser},
        authStore: {logout},
    } = useStore();
    const navigate = useNavigate();

    const handleClickLogout = () => {
        logout();
        navigate(RouteNames.LOGIN);
    };

    const handleClickLogo = () => {
        navigate(RouteNames.DASHBOARD);
        setSection(HEADERS[0]);
    };

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar sx={ {justifyContent: 'space-between'} }>
                    <img
                        onClick={ handleClickLogo }
                        src={ logo }
                        alt='logo skkdc'
                        className='app-header__logo'
                        width={ 120 }
                    />
                    <div className='menu'>
                        <ul>
                            {
                                HEADERS.map((item: IMenuItem) =>
                                    <li
                                        key={ item.to }
                                        onClick={ () => setSection(item) }
                                        className={ section.to === item.to ? 'active' : '' }
                                    >
                                        <Link to={ item.to }>
                                            { item.label }
                                        </Link>
                                    </li>,
                                )
                            }
                        </ul>
                    </div>
                    <Box sx={ {
                        flexGrow: 0,
                        display: 'flex',
                        alignItems: 'center',
                    } }
                         className='menu-center__login'>
                        <div className='menu-center__username'>
                            { currentUser && currentUser.name }
                        </div>
                        <Tooltip title='Выйти'>
                            <IconButton
                                size='medium'
                                edge='end'
                                aria-label='account of current user'
                                aria-controls='account of current user'
                                aria-haspopup='true'
                                color='inherit'
                                onClick={ handleClickLogout }
                            >
                                <Logout fontSize='small'/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default observer(Header);
