import React from 'react';
import acmLogo from '../../assets/acmlogo.png';
import './Logo.css';

const logo = (props) => (
    <div className={'Logo'}>
        <img src={acmLogo} alt='ACM Logo'/>
    </div>
);

export default logo;