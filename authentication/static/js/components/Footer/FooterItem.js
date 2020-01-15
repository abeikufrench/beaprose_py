import React, { Component } from 'react';
import "./FooterItem.scss";

export default class FooterItem extends Component {
    render() {
        return (
            <div className="FooterItem">
                <p>{this.props.heading}</p>
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

FooterItem.defaultProps = {
    heading: "",
    items: []
}
