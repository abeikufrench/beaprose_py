import React from "react";
import "./CallButton.scss";

class CallButton extends React.Component {

    render() {
        return (
            <button className="CallButton" {...this.props}>
                {this.props.text}
            </button>
        )
    }
}

CallButton.defaultProps = {
    text: ""
}

export default CallButton;