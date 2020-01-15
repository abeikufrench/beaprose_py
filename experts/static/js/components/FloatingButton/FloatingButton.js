import React, { Component } from 'react';
import M from "materialize-css";
import "./FloatingButton.scss";

const inputRef = React.createRef();

export default class FloatingButton extends Component {

    componentDidMount() {

    }

    render() {
        const { onClick, icon, color, iconColor } = this.props;
        return (
            <button style={{
                backgroundColor: color,
                ...this.props.style
            }} className={`btn-floating AddButton ${this.props.className}`} onClick={onClick} ref={inputRef}>
                <i className="material-icons" style={{
                    color: iconColor
                }}>{icon}</i>
            </button>
        )
    }
}
