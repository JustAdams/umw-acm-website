// New page that displays the full selected post including any images

import React, { Component } from 'react';
import PostImage from '../../../components/Post/PostImage';
import {getFullPost} from '../../../shared/fetch';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props);
        this.loadPost();
    }

    async loadPost() {
        const postData = await getFullPost(this.props.postId);
        
    }

    render() {
        return (
            <article className='FullPost'>
                <p>Full Post</p>
                <h3>{this.props.title}</h3>
                <p className='PostContent'>{this.props.content}</p>
                <PostImage
                    className='PostImage' 
                    imageName={this.props.imageName} />
            </article>
        );
    };
};

export default FullPost;