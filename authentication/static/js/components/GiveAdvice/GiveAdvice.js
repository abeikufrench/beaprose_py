import React, { Component } from 'react';
import "./GiveAdvice.scss";

export default class GiveAdvice extends Component {
    render() {
        return (
            <div className="GiveAdvice">
                <div className="text-container">
                    <h1 className="heading-text">
                        Give advice on areas you are
                        passionate about
                    </h1>
                    <a className="btn btn-signUp">
                        Sign up as an Influencer
                    </a>
                </div>
            </div>
        )
    }
}
