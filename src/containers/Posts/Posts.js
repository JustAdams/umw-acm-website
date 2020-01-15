import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Posts.css';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import {getPosts, getFullPost} from '../../shared/fetch';
import PostImage from '../../components/Post/PostImage';

class Posts extends Component {
    state = {
        posts: [],
        fullPost: null
    }

    componentDidMount() {
        this.loadAllPosts();
    }

    async loadAllPosts() {
        const fetchedPosts = await getPosts();
        this.setState({posts: fetchedPosts});
    }

    selectPostHandler = (id) => {
        const fullPost = this.state.posts[id];
        this.setState({fullPost: fullPost});
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
                            imageName={post.image_name}
                            clicked={() => this.selectPostHandler(post.post_id)} />
                    );
                });
        };
        let fullPost = null;
        if (this.state.fullPost) {
            fullPost = (
                <article>
                    <h1>{this.state.fullPost.post_title}</h1>
                    <PostImage
                        imageName={this.state.fullPost.image_name} />
                    <p>{this.state.fullPost.post_content}</p>
                </article>
            );
        }
        return (
            <div>
                <section className='Posts'>
                    {newsPosts}
                </section>
                {fullPost}
            </div>
        );
    };
};

export default Posts;