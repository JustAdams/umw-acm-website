import React from 'react';
import './Button.css';

const button = (props) => (
    <div>
        <button className='Button'>{props.children}</button>
    </div>
);

export default button;