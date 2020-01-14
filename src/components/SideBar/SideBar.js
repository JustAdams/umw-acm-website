import React from 'react';
import './SideBar.css';
import ContactForm from '../../containers/ContactForm/ContactForm';
import SideBarLogo from './SideBarLogo/SideBarLogo';

const sideBar = (props) => (
    <div className='SideBar'>
        <ContactForm />
        <SideBarLogo />
    </div>
);

export default sideBar;