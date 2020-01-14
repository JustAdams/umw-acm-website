import React from 'react';
import robotLogo from '../../../assets/robot.png';
import './SideBarLogo.css';

const sidebarLogo = () => (
    <div>
        <img 
            src={robotLogo} 
            alt='Sidebar Robot' 
            className='SideBarLogo'/>
    </div>
);

export default sidebarLogo;