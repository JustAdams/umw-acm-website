import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class AdminPage extends Component {
    state = {
        title: '',
        image_name: '',
        content: ''
    }

    submitPostHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        const postData = {
            title: this.state.title,
            content: this.state.content,
            image_name: this.state.image_name,
            post_date: new Date()
        }
        axios.post('/posts.json', postData)
            .then(response => {
                alert(postData.title + ' Submitted');
            })
            .catch(error => {
                alert(error);
            })
    }

    render() {
        const postArray = [];
        for (let key in this.state.post) {
            postArray.push({
                id: key,
                config: this.state.post[key]
            });
        };
        let form = <h3>Unable to load form</h3>
        if (!this.state.error) {
            form = (
                <form onSubmit={this.submitPostHandler}>
                    <br />
                    <h1>Add a Post</h1>
                    <Input type='text' value={this.state.title} placeholder='Title' changed={(event) => this.setState({title: event.target.value})} />
                    <Input type='text' value={this.state.image_name} placeholder='Image Filename' changed={(event) => this.setState({image_name: event.target.value})} />
                    <textarea
                        rows='10'
                        cols='40'
                        onChange={(event) => this.setState({content: event.target.value})} />
                    <Button>Submit</Button>
                </form> 
            )
        }

        return (
            <Aux>
                {form}
            </Aux>
        );
    };

};

export default AdminPage;