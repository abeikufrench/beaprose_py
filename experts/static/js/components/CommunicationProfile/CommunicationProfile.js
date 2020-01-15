import React, { Component } from 'react'
import "./CommunicationProfile.scss";

import HeadingText from "../HeadingText/HeadingText";
import Bar from '../Stepper/Bar';
import CommunicationForm from './CommunicationForm';


export default class CommunicationProfile extends Component {
    render() {
        const { className, stepNumber, steps } = this.props;
        return (
            <div className={`CommunicationProfile ${className}`}>
                <Bar division={steps - (stepNumber - 1)}/>
                <p className="text-muted pl-3 mt-2">Step { stepNumber }</p>
                <div className="container">
                <HeadingText>Communication</HeadingText>
                <p className="text-muted">Let us know how we can get ahold of you.</p>
                <CommunicationForm/>
                </div>
            </div>
        )
    }
}
