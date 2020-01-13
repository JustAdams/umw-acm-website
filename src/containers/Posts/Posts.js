import React, { Component } from 'react';
import './Posts.css';
import Post from '../../components/Post/Post';

class Posts extends Component {
    state = {
        posts: []
    }



    getInitialProps() {
        // load news posts from database and insert into state posts array
    };

    render() {
        return (
            <div className='Posts'>
                <Post
                    title={'Test Post'}
                    content={'This is the post content!'} />
            </div>
        );
    };
};

export default Posts;