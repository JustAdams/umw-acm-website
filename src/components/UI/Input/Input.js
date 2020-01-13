import React from 'react';
import './Input.css';

const input = (props) => (
    <div>
        <input
            className='Input'
            type={props.elementType}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.changed} >
        </input>
    </div>
);

export default input;