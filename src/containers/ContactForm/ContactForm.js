import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class ContactForm extends Component {
    state = {
        contactForm: {
            name: {
                value: '',
                placeholder: 'Your Name'
            },
            email: {
                value: '',
                placeholder: 'UMW Email'
            }
        }
    };

    addMemberHandler(event) {
        event.preventDefault();
    }

    render() {

        let contactForm = <p>Error loading contact form!</p>
        if (!this.state.error) {
           contactForm =
                <form onSubmit={this.addMemberHandler}>
                    <h3>Join the Club!</h3>
                    <Input 
                        value={this.state.contactForm.name.value} 
                        placeholder={this.state.contactForm.name.placeholder} />
                    <Input 
                        value={this.state.contactForm.email.value} 
                        placeholder={this.state.contactForm.email.placeholder} />
                    <Button >SUBMIT</Button>
                </form>
        };

        return (
            <div>
                {contactForm}
            </div>
        );
    };
};

export default ContactForm;