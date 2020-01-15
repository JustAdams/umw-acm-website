import React from 'react';

const postImage = (props) => (
    <div>
        <img src={require('../../assets/NewsImages/' + props.imageName)} />
    </div>
);

export default postImage;