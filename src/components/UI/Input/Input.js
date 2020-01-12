import React from 'react';

const input = (props) => (
    <div>
        <input
            value={props.value}
            placeholder={props.placeholder}>
        </input>
    </div>
);

export default input;