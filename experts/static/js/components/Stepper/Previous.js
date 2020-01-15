import React from "react";

export default function Previous(props) {
    const { isActive } = props;
    if (isActive === false) return null;
    return (
        <button className="btn btn-reset mr-3" onClick={() => props.goToPreviousStep()}>
            Previous
        </button>
    )
}