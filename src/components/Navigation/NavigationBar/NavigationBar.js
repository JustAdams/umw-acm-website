import React from 'react';
import Logo from '../../Logo/Logo';
import './NavigationBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';

const navigationBar = (props) => (
    <div className='NavigationBar'>
        <Logo />
        <div className={'DesktopOnly'}>
            <NavigationItems />
        </div>
        <DrawerToggle
            clicked={props.toggleDrawerClicked} />
    </div>
);

export default navigationBar;