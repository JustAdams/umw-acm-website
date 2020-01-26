import React from 'react';
import './PostImage.css';

const postImage = (props) => (
    <div className='PostImage'>
        {props.image_name ?
            <img src={require('../../assets/NewsImages/' + props.image_name)} alt={props.image_name} />
            : null }
    </div>
);

export default postImage;