// New page that displays the full selected post including any images

import React, { Component } from 'react';
import PostImage from '../../../components/Post/PostImage';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props);
        this.loadPost();
    }

    async loadPost() {
    }

    render() {
        return (
            <article className='FullPost'>
                <p>Full Post</p>
                <h3>{this.props.title}</h3>
                <PostImage
                    className='PostImage' 
                    image_name={this.props.image_name} />
                    <p className='PostContent'>{this.props.content}</p>
            </article>
        );
    };
};

export default FullPost;