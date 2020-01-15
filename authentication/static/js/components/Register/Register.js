import React, { Component } from 'react'
import zxcvbn from "zxcvbn";
import "./Register.scss";
import PhoneInput from "react-phone-input-2";

import FacebookLoginContainer from '../FacebookLoginContainer/FacebookLoginContainer';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.state = {
            password1: "",
            password2: "",
            errors: [],
            phoneNumber: ""
        }
    }

    handlePasswordChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    isFormValid() {
        if(!this.isPasswordValid()) {
            return false;
        }
        return true;
    }

    isPasswordValid() {
        let errors = [];
        let error;
        if(this.state.password1 !== this.state.password2) {
            error = {message: "Passwords not equal!"};
            this.setState({
                errors: errors.concat(error)
            })
            return false;
        }
        return true;
    }

    handleSubmit(e) {
        if(!this.isFormValid()) {
            e.preventDefault();
        }
    }

    handleChange = (value) => {
        console.log(value)
        this.setState({phoneNumber: value})
    }

    render() {
        const { password } = this.state;
        const { expert } = this.props;
        let action_url = expert ? "/expert/register/" : "/register/"
        return (
        <div className="Register">
            <div className="row">
                <FacebookLoginContainer register/>
                <div className="col m6 register-section">
                <h2 className="heading-text">Create an account</h2>
                <p className="text-muted">Registration is easy. Please take a second to fill in your information</p>
                <form onSubmit={this.handleSubmit} method="POST" action={action_url}>
                    <div className="input-field col s8">
                        <input id="email" required name="email" type="email" className="fullWidth ms-input"/>
                        <label htmlFor="email" className="active">Email</label>
                    </div>
                    <div class="input-field col s8">
                        <input id="firstName" name="first_name" required type="text" className="fullWidth ms-input"/>
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                    <div class="input-field col s8">
                        <input id="lastName" name="last_name" required type="text" className="fullWidth ms-input"/>
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                    {!expert && <div class="input-field col s8">
                        {/* <span className="prefix">+233</span>
                        <input name="phoneNumber" id="icon_prefix" type="tel" class="validate"/>
                        <label for="icon_prefix">Phone Number</label> */}
                        <PhoneInput onChange={this.handleChange} value={this.state.phoneNumber} defaultCountry={"us"} inputExtraProps={{
                             name: "phoneNumber",
                             className: "validate",
                             type: "tel"
                        }}/>
                    </div>}
                    <div class="input-field col s8">
                        <input id="password1" onChange={this.handlePasswordChange} value={password} name="password1" required type="password" className="fullWidth"/>
                        <label className="active" for="password1">Password</label>
                    </div>
                    <div class="input-field col s8">
                        <input id="password2" value={this.password2} onChange={this.handlePasswordChange} name="password2" required type="password" className="fullWidth"/>
                        <label className="active" htmlFor="password2">Password Confirmation</label>
                    </div>
                    <div class="input-field col s8">
                        <button type="submit" className="btn btn-signUp">
                            Continue
                        </button>
                        <span class=" ml-3">Already have an account? <a className="link" href="/login/">Log in</a></span>
                    </div>
                    <ul>
                        {this.state.errors.map((error, index) => (
                            <li key={index}>{error.message}</li>
                        ))}
                    </ul>
                </form>
            </div>
            </div>
        </div>
        )
    }
}
