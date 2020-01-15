import React, { Component } from 'react'
import "./WorksItem.scss";

export default class WorksItem extends Component {
    render() {
        return (
            <div className="WorksItem">
                <img src={this.props.image} alt={this.props.title}/>
                <h5 className="text-center">{this.props.title}</h5>
                {this.props.children}
            </div>
        )
    }
}
