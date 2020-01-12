import React from 'react';
import './SideBar.css';
import ContactForm from '../../containers/ContactForm/ContactForm';

const sideBar = (props) => (
    <div className='SideBar'>
        <ContactForm />
        <br />
        <br />
        <p>ACM ROBOT ART HERE</p>
        <br />
        <br />
    </div>
);

export default sideBar;