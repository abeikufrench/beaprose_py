import React from "react";

import "./SubHeading.scss";

class SubHeading extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <p className="SubHeading">{children}</p>
        )
    }
}

SubHeading.defaultProps = {
    text: ""
}

export default SubHeading;