import React, { Component } from 'react';
import "./RateAndAvailability.scss";

import HeadingText from "../HeadingText/HeadingText";
import Bar from '../Stepper/Bar';
import RateAndAvailabilityForm from './RateAndAvailabilityForm';

export default class RateAndAvailability extends Component {
    render() {
        const { className,stepNumber, steps } = this.props;
        return (
            <div className={`RateAndAvailability ${className}`}>
                <Bar division={steps - (stepNumber - 1)}/>
                <p className="text-muted pl-3 mt-2">Step { stepNumber }</p>
                <div className="container">
                <HeadingText>
                    Rate and Availability
                </HeadingText>
                <p className="text-muted">Let us know your consultation rate and availability level.</p>
                <RateAndAvailabilityForm/>
                </div>
            </div>
        )
    }
}
