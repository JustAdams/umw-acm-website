import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' exact>Home</NavigationItem>
        <NavigationItem link='/news' exact>News</NavigationItem>
        <NavigationItem link='/about' exact>About</NavigationItem>
    </ul>
);

export default navigationItems;