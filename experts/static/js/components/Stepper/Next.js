import React from "react";

export default function Next(props) {
    const { isActive } = props;
    if(isActive === false) return null;
    return (
        <button className="btn btn-signUp" onClick={() => props.goToNextStep()}>
            Continue
        </button>
    )
}