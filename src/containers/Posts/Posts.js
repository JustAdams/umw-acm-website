import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Posts.css';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import {getPosts, getFullPost} from '../../shared/fetch';
import PostImage from '../../components/Post/PostImage';

class Posts extends Component {
    state = {
        startPostNum: 0,
        posts: [],
        fullPost: null
    }

    componentDidMount() {
        this.loadAllPosts();
    }


    // Loads all the posts from the database and sets into state
    async loadAllPosts() {
        const fetchedPosts = await getPosts();
        this.setState({posts: fetchedPosts});
    }

    // On mount shows the most recent 3 posts
    // Buttons alter the state startNum which is the post to start from
    renderSelectedPosts() {
        const startNum = this.state.startPostNum;
        const sliceNum = startNum + 3;
        let newsPosts = <p>Error loading news posts!</p>
        if (!this.state.error) {
            newsPosts = 
                this.state.posts.slice(startNum, sliceNum).reverse().map(post => {
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
        return newsPosts;
    }

    // Sets full post to display from selected post id
    selectPostHandler(id) {
        const fullPost = this.state.posts[id];
        this.setState({fullPost: fullPost});
    }

    // Buttons either shift the displayed posts to newer or older by 1
    buttonChangeHandler(buttonDir) {
    }


    render() {
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
                <button 
                    onClick={this.buttonChangeHandler('newer')}
                    className='postChangeButton'>
                        Newer
                </button>
                <section className='Posts'>
                    {this.renderSelectedPosts()}
                </section>
                <button
                    onClick={this.buttonChangeHandler('older')}
                    className='postChangeButton'
                    >Older</button>
                {fullPost}
            </div>
        );
    };
};

export default Posts;