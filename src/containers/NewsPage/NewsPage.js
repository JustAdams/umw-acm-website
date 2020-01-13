import React, { Component } from 'react';
import Posts from '../Posts/Posts';

class NewsPage extends Component {

    render() {
        return (
            <div>
                <h1>News Page</h1>
                <Posts />
            </div>
        );
    };
};

export default NewsPage;