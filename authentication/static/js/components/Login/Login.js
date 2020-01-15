import React, { Component } from 'react'
import FacebookLoginContainer from "../FacebookLoginContainer/FacebookLoginContainer";
import "./Login.scss";
import Error from "../Error/Error";
import Axios from 'axios';

const login_url = "/api/login/";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: ""
        })
        Axios.post(login_url, {...this.state})
                    .then(({data}) => {
                        localStorage.setItem("email", data.user)
                        localStorage.setItem("id", data.id)
                        if(data.is_expert){
                            window.location.href = "/experts/home/"
                        } else if(data.is_customer){
                            window.location.href = "/customers/home/"
                        }
                    })
                    .catch(() => {
                        this.setState({
                            error: "Incorrect username or password!"
                        })
                    })
    }

    render() {
        const error = (<Error error>Incorrect username or password!</Error>)
        return (
            <div className="Login">
                <div className="row">
                    <FacebookLoginContainer/>
                    <div className="col m6">
                    <h2 className="heading-text">Log In</h2>
                    <p className="text-muted">Thank You for coming back.</p>
                        <form onSubmit={this.handleSubmit} method="POST" action="/login/">
                        <div className="input-field col s8">
                            <input value={this.state.email} onChange={this.handleChange} id="email" required name="email" type="email" className="validate"/>
                            <label className="active" htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s8">
                            <input value={this.state.password} onChange={this.handleChange} name="password" id="password" required type="password"/>
                            <label className="active" htmlFor="password">Password</label>
                        </div>
                        <div class="input-field col s12">
                        <button type="submit" className="btn btn-signUp">
                            Continue
                        </button>
                        <span class=" ml-3">Do not have an account? <a className="link" href="/register/">Sign Up</a></span>
                        {this.state.error && error}
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
