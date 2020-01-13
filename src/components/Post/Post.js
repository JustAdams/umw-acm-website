import React from 'react';
import './Post.css';

const post = (props) => (
    <article className='Post'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </article>
);

export default post;