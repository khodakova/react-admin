import React, { useCallback, useEffect } from 'react';
import { useStore } from '@src/store/store';
import { observer } from 'mobx-react-lite';
import { HEADERS, IMenuItem } from '@src/router';
import { Link } from 'react-router-dom';

const SidepanelMenu: React.FC = () => {
    const {
        commonStore: {
            isSidepanelVisible,
            setIsSidepanelVisible,
            section,
            setSection,
        },
        authStore: { logout },
    } = useStore();

    const escFunction = useCallback((event: any) => {
        if (event.keyCode === 27) {
            setIsSidepanelVisible();
        }
    }, []);

    const handleClick = (item: IMenuItem) => {
        setIsSidepanelVisible();
        setSection(item);
    };

    useEffect(() => {
        isSidepanelVisible
            ? document.addEventListener('keydown', escFunction, false)
            : document.removeEventListener('keydown', escFunction, false);
    }, [isSidepanelVisible]);

    return (
        <>
            <div
                className={ `sidepanel-menu ${ isSidepanelVisible ? 'show' : '' }` }
                onClick={ (e) => e.stopPropagation() }
            >
                <div className='s-menu__title'>
                    <a
                        onClick={ setIsSidepanelVisible }
                        href='#'
                        className='s-menu-close'
                    >
                        +
                    </a>
                </div>
                <ul>
                    { HEADERS.map(item => (
                        <li
                            key={ item.name }
                            className={section.name === item.name ? 'active' : ''}
                        >
                            <Link
                                to={ item.to }
                                onClick={ () => handleClick(item) }
                            >
                                { item.label }
                            </Link>
                        </li>
                    )) }
                    <li onClick={ logout }>
                        Выйти
                    </li>
                </ul>
            </div>
            <div
                className={ `overlay-menu ${ isSidepanelVisible ? 'active' : '' }` }
                onClick={ setIsSidepanelVisible }
            />
        </>
    );
};

export default observer(SidepanelMenu);