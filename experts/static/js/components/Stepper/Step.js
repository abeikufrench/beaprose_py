import React, { Component } from 'react';
import Previous from "./Previous";
import Next from "./Next";
import Submit from "./Submit";

export default class Step extends Component {
    render() {
        const {
            isActive,
            displayPrevious,
            displayNext,
            displaySubmit,
            stepNumber,
            component,
            children,
            steps
        } = this.props;

        if(isActive === false) return null;

        return (
            <>
            {component ? React.createElement(component, {
                stepNumber,
                steps
            }) : children}
            <div className="container">
                <Previous 
                isActive={displayPrevious}
                goToPreviousStep={() => this.props.goToPreviousStep()}
                />
                <Next 
                isActive={displayNext}
                goToNextStep={() => this.props.goToNextStep()}
                />
                <Submit isActive={displaySubmit}/>
            </div>
            </>
        )
    }
}
