import React, { Component } from 'react';
import "./Footer.scss";
import FooterItem from './FooterItem';
import NewsletterForm from './NewsletterForm';
import Axios from 'axios';

const NEWSLETTER_ENDPOINT = "/api/newsletter/";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group1: ["About Us", "Become an Expert", "Platform", "Our application"],
            group2: ["Support", "Contact Us", "Terms of Use", "Privacy policy"]
        }
    }

    handleSubmit = (values) => {
        console.log(values);
        Axios.post(NEWSLETTER_ENDPOINT, values).then(() => {
            alert("Thanks for subscribing");
        }).catch(() => {
            alert("Aww!! An error occurred");
        })
    }

    render() {
        return (
            <div className="Footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col m3 s12">
                            <img src="/static/images/logo.png" alt="logo"/>
                        </div>
                        <div className="col m3 s12">
                            <FooterItem heading="Some text" items={this.state.group1}/>
                        </div>
                        <div className="col m3 s12">
                            <FooterItem heading="Some text" items={this.state.group2}/>
                        </div>
                        <div className="col m3 s12">
                            <FooterItem heading="Newsletter"/>
                            <p className="white-text">
                            Sign Up for inspirational stories and useful tips
                            </p>
                            <NewsletterForm onSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
