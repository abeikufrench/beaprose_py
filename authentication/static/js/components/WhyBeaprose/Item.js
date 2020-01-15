import React, { Component } from 'react';
import "./Item.scss";

export default class Item extends Component {
    render() {
        return (
            <div className="Item">
                <img src={this.props.image} alt={this.props.title}/>
                <p className="text-center title my-2">{this.props.title}</p>
                {this.props.children}
            </div>
        )
    }
}

React.defaultProps = {
    image: null,
    title: ""
}
