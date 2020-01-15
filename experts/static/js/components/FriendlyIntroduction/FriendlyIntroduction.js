import React, { Component } from 'react';
import "./FriendlyIntroduction.scss";

import HeadingText from "../HeadingText/HeadingText";
import Bar from '../Stepper/Bar';
import FriendlyIntroForm from './FriendlyIntroForm';


export default class FriendlyIntroduction extends Component {
    render() {
        const { className, stepNumber, steps } = this.props;
        return (
            <div className={`FriendlyIntroduction ${className}`}>
                <Bar division={steps - (stepNumber - 1)}/>
                <p className="text-muted pl-3 mt-2">Step { stepNumber }</p>
                <div className="container">
                <HeadingText>Write a friendly introduction.</HeadingText>
                <p className="text-muted">These are the first things people will see on your profile.</p>
                <FriendlyIntroForm/>
                </div>
            </div>
        )
    }
}
