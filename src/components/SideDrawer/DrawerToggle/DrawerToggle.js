import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = (props) => {

    return (
        <div>
            <h1 className='DrawerToggle' onClick={props.clicked}>X</h1>
        </div>
    );
};

export default DrawerToggle;