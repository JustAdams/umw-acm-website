import React, { Component } from 'react';
import './Posts.css';
import Post from '../../components/Post/Post';
import {getPosts} from '../../shared/fetch';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadAllPosts();
    }

    async loadAllPosts() {
        const fetchedPosts = await getPosts();
        this.setState({posts: fetchedPosts});
    }

    selectPostHandler(content) {
        alert(content);
    }

    render() {
        let newsPosts = <p>Error loading news posts!</p>
        if (!this.state.error) {
            newsPosts = 
                this.state.posts.slice(0, 6).reverse().map(post => {
                    return (
                        <Post
                            key={post.post_id}
                            title={post.post_title}
                            postDate={post.post_date.substring(0,10)} // substring reduces to year-month-day
                            content={post.post_content}
                            clicked={() => this.selectPostHandler(post.post_content)} />
                    );
                });
        };
        return (
            <div className='Posts'>
                {newsPosts}
            </div>
        );
    };
};

export default Posts;