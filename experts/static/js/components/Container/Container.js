import React, { Component } from 'react';
import "./Container.scss";

export default class Container extends Component {
    render() {
        return (
            <div className="Container" style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
