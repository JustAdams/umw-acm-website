import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Posts.css';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import PostImage from '../../components/Post/PostImage';
import axios from '../../axios';

class Posts extends Component {
    state = {
        startPostNum: 0,
        posts: [],
        fullPost: null
    }

    componentDidMount() {
        axios.get( '/posts.json')
            .then(res => {
                const fetchedPosts = [];
                for ( let key in res.data ) {
                    fetchedPosts.push( {
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({posts: fetchedPosts});
            })
            .catch(error => {
                console.log(error);
            });
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
                            key={post.id}
                            title={post.title}
                            post_date={post.post_date.substring(0,10)} // substring reduces to year-month-day
                            content={post.content}
                            image_name={post.image_name}
                            clicked={() => this.selectPostHandler(post)} />
                    );
                });
        };

        return newsPosts;
    }

    // Sets full post to display from selected post id
    selectPostHandler(id) {
        const fullPost = id;
        this.setState({fullPost: fullPost});
    }

    // Buttons either shift the displayed posts to newer or older by 1
    buttonChangeHandler(buttonDir) {
    }


    render() {
        let fullPost;
        if (this.state.fullPost) {
            fullPost = (
                <article>
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.content}</p>
                    <PostImage
                        image_name={this.state.fullPost.image_name} />
                    
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