import React, { useEffect } from 'react';
import { useStore } from '@src/store/store';
import { observer } from 'mobx-react-lite';
import { HEADERS, IMenuItem } from '@src/router';
import { Link } from 'react-router-dom';
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEscape } from "@src/hooks/useEscape";
import { Drawer, DrawerHeader } from "@src/layouts/sidepanelMenu/Drawer.styled";
import cn from 'classnames';

const SidepanelMenu: React.FC = () => {
    const {
        commonStore: { isSidePanel, section, setIsSidePanel, setSection },
    } = useStore();
    const theme = useTheme();
    const { escFunction } = useEscape(setIsSidePanel);

    useEffect(() => {
        isSidePanel
            ? document.addEventListener('keydown', escFunction, false)
            : document.removeEventListener('keydown', escFunction, false);
    }, [isSidePanel]);

    return (
        <Drawer open={ isSidePanel } variant='permanent'>
            <DrawerHeader>
                <IconButton onClick={ setIsSidePanel }>
                    { theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/> }
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                { HEADERS.map((item: IMenuItem, idx) => (
                    <Link
                        to={ item.to }
                        key={ idx }
                        className={ cn('sidepanel__item', { 'sidepanel__item_active': section.to === item.to }) }
                        onClick={ () => setSection(item) }
                    >
                        <ListItem button>
                            <Tooltip title={ item.label }>
                                <ListItemIcon>
                                    { item.icon }
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText primary={ item.label }/>
                        </ListItem>
                    </Link>
                )) }
            </List>
            <div className={ cn('sidepanel__footer', { 'show': isSidePanel }) }>
                2022, copyright(c) atata
            </div>
        </Drawer>
    );
};

export default observer(SidepanelMenu);