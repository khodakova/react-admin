import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HEADERS, RouteNames } from '@src/router';
import { useStore } from '@src/store/store';
import { Box, Breadcrumbs, IconButton, Link, Toolbar, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '@images/logo.png';
import logo2 from '@images/logo2.png';
import cn from 'classnames';
import { AppBar } from "@src/layouts/header/AppBar.styled";
import AppHeaderGame from "@src/layouts/header/components/AppHeaderGame";

const Header: React.FC = () => {
    const {
        commonStore: { section, isSidePanel, setSection, setIsSidePanel, currentUser },
        authStore: { logout },
        gameStore: { gameBlock, gameOver, setGameBlock, reset }
    } = useStore();

    const navigate = useNavigate();

    const handleClickLogout = () => {
        logout();
        navigate(RouteNames.LOGIN);
    };

    const handleClickLogo = () => {
        if (!gameOver) {
            setGameBlock();
        } else {
            reset();
        }
    };

    return (
        <Box>
            <AppBar position='fixed'
                    open={ isSidePanel }
                    className={ cn('app-header', { 'game': gameBlock && !gameOver }) }
            >
                {
                    !gameBlock
                        ? <Toolbar sx={ { justifyContent: 'space-between' } }>
                            <img
                                onClick={ handleClickLogo }
                                src={ !gameOver ? logo : logo2 }
                                alt='logo skkdc'
                                className={ cn('app-header__logo', { 'hide': isSidePanel }) }
                                width={ 50 }
                            />
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={ setIsSidePanel }
                                edge="start"
                                sx={ {
                                    margin: '0 36px',
                                    ...(isSidePanel && { display: 'none' }),
                                } }
                            >
                                <MenuIcon/>
                            </IconButton>
                            <div className='menu'>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="white" href={ section.to }>
                                        { section.label }
                                    </Link>
                                </Breadcrumbs>
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
                        : <AppHeaderGame/>
                }

            </AppBar>
        </Box>
    );
};

export default observer(Header);
