import React, { Component } from 'react';
import './Posts.css';
import Post from '../../components/Post/Post';
import PostImage from '../../components/Post/PostImage';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';

class Posts extends Component {
    state = {
        startPostNum: 0,
        posts: [],
        fullPost: null,
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get( '/posts.json')
            .then(res => {
                const fetchedPosts = [];
                for ( let key in res.data ) {
                    fetchedPosts.push( {
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    posts: fetchedPosts,
                    loading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }


    // On mount shows the most recent 4 posts
    // Buttons alter the state startNum which is the post to start from
    // TODO - make post shift buttons
    renderSelectedPosts() {
        const startNum = this.state.startPostNum;
        const sliceNum = startNum + 4;
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
        let displayedPosts = this.renderSelectedPosts();
        if (this.state.loading) {
            displayedPosts = <Spinner />
        }
        let fullPost;
        if (this.state.fullPost) {
            fullPost = (
                <article className='FullPost'>
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.content}</p>
                    <PostImage
                        image_name={this.state.fullPost.image_name} />
                    
                </article>
            );
        }
        return (
            <div>
                <section className='Posts'>
                    {displayedPosts}
                </section>
                {fullPost}
            </div>
        );
    };
};

export default Posts;