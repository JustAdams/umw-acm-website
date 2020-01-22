import React from 'react';

const postImage = (props) => (
    <div>
        {props.image_name ?
            <img src={require('../../assets/NewsImages/' + props.image_name)} />
            : null }
    </div>
);

export default postImage;