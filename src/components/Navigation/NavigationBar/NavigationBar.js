import React from 'react';
import Logo from '../../Logo/Logo';
import './NavigationBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const navigationBar = (props) => (
    <div className='NavigationBar'>
        <Logo />
        <NavigationItems />
    </div>
);

export default navigationBar;