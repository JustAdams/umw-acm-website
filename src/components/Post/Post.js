import React from 'react';
import PostImage from './PostImage';
import './Post.css';

const post = (props) => (
    <article 
        className='Post'
        onClick={props.clicked}>
        <h3>{props.title}</h3>
        <p>{props.post_date}</p>
        
    </article>
);

export default post;