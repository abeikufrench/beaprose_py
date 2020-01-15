import React, { Component } from 'react'
import "./FacebookLoginContainer.scss";

export default class FacebookLoginContainer extends Component {
    render() {
        return (
            <div className="FacebookLoginContainer col m6">
                <p className="title-text">{this.props.register ? "Join with" : "Log In"} <br/> <span className="heading-text">Facebook</span></p>
                <div>
                    <button className="btn btn-facebook mt-5">
                        {this.props.register ? "Sign Up" : "Log In"}
                        <span className="ml-1 mt-3"><i className="fab fa-facebook-f"></i></span>
                    </button>
                </div>
            </div>
        )
    }
}
