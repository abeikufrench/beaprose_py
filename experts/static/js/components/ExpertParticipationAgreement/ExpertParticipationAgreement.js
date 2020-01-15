import React, { Component } from 'react';
import HeadingText from "../HeadingText/HeadingText";

import "./ExpertParticipationAgreement.scss";

export default class ExpertParticipationAgreement extends Component {
    render() {
        return (
            <div className={`ExpertParticipationAgreement ${this.props.className}`}>
                <HeadingText className="pl-2 pt-2">
                    Expert Participation Agreement
                </HeadingText>
                <div className="text-muted p-2">{this.props.children}</div>
            </div>
        )
    }
}
