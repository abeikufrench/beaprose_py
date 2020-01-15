import React, { Component } from 'react';
import WorksItem from "./WorksItem";
import "./HowItWorks.scss";

export default class HowItWorks extends Component {
    render() {
        return (
            <div className="HowItWorks">
                <h2 className="heading-text text-center mb-3">How it Works?</h2>
                <div className="container">
                    <div className="row">
                    <div className="col m1"></div>
                    <div className="col m3 s12">
                        <WorksItem image="/static/images/person1.png" title="Select your category" showArrow>
                            <p className="text-center text-muted">
                                Find an expert by browsing through our 
                                community of experts
                            </p>
                        </WorksItem>
                    </div>
                    <div className="col m1 arrow">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </div>
                    <div className="col m3 s12">
                        <WorksItem image="/static/images/person2.png" title="Request a call" showArrow>
                            <p className="text-center text-muted mb-3">
                                Talk to an expert through voice or video call on your device
                            </p>
                            <p className="text-center text-muted mb-5">
                                Talk to an expert through an online chat
                            </p>
                            <a href="" className="btn btn-reset text-center mt-5">Take a look</a>
                        </WorksItem>
                    </div>
                    <div className="col m1 arrow">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </div>
                    <div className="col m3 s12">
                        <WorksItem image="/static/images/person4.png" title="Enjoy you product or service">
                            <p className="text-center text-muted">Seek for a second opinion for free</p>
                        </WorksItem>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
