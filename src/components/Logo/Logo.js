import React from 'react';
import acmLogo from '../../assets/acmlogo.png';
import './Logo.css';

const logo = (props) => (
    <div>
        <img src={acmLogo} alt='ACM Logo' className={'Logo'}/>
    </div>
);

export default logo;