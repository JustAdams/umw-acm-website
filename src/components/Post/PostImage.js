import React from 'react';

const postImage = (props) => (
    <div>
        {props.imageName ?
            <img src={require('../../assets/NewsImages/' + props.imageName)} />
            : null }
    </div>
);

export default postImage;