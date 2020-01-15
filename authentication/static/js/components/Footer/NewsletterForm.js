import React, { Component } from 'react'

export default class NewsletterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="newsletter-form mt-3">
                <input
                className="email-input mr-2" 
                name="email" 
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                />
                <button type="submit" className="btn btn-signUp">Sign Up</button>
            </form>
        )
    }
}
