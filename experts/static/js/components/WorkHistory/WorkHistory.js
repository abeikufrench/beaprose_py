import React, { Component } from 'react'
import "./WorkHistory.scss";

import HeadingText from "../HeadingText/HeadingText";
import Bar from '../Stepper/Bar';
import WorkHistoryForm from './WorkHistoryForm';


export default class WorkHistory extends Component {
    render() {
        const { className,stepNumber, steps } = this.props;
        return (
            <div className={`WorkHistory ${className}`}>
                <Bar division={steps - (stepNumber-1)}/>
                <p className="text-muted pl-3 mt-2">Step { stepNumber }</p>
                <div className="container">
                <HeadingText>Your work history</HeadingText>
                <p className="text-muted">Help us understand your unique work experience.</p>
                <WorkHistoryForm/>
                </div>
            </div>
        )
    }
}
