import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './ContactForm.css';
import {updateObject} from '../../shared/utility';

class ContactForm extends Component {
    state = {
        contactForm: {
            name: {
                value: '',
                elementConfig: {
                    elementType: 'text',
                    placeholder: 'Name'
                }
            },
            email: {
                value: '',
                elementConfig: {
                    placeholder: 'UMW Email',
                    elementType: 'email'
                }
            }
        }
        
    };

    inputChangedHandler = (event, formId) => {
        const updatedFormElement = updateObject(this.state.contactForm[formId], {
            value: event.target.value,
        });
        const updatedContactForm = updateObject(this.state.contactForm, {
            [formId] : updatedFormElement
        });
        
        this.setState({contactForm: updatedContactForm});
    };

    addMemberHandler = (event) => {
        event.preventDefault();
        console.log(this.state.contactForm);
    }

    render() {
        const contactFormArray = [];
        for (let key in this.state.contactForm) {
            contactFormArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        };
        let contactForm = <p>Error loading contact form!</p>
        if (!this.state.error) {
            contactForm = 
                <form onSubmit={this.addMemberHandler} className='ContactForm'>
                    <h3>Join the Club!</h3>
                    {contactFormArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            value={formElement.value}
                            elementType={formElement.config.elementConfig.elementType}
                            placeholder={formElement.config.elementConfig.placeholder} 
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                    <Button>SUBMIT</Button>
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