import React, { Component } from 'react';
import "./Stat.scss";

export default class Stat extends Component {
    // props --->   title, stat, icon, color
    render() {
        const { title, stat, icon, color } = this.props;
        return (
            <div className="Stat p-1" style={{
                background: color
            }}>
                <div>
                    <span className="heading-text stat">{stat}</span><br/>
                    <span className="text-muted title">{title}</span>
                </div>
                <div className="icon-container mt-2">
                    <img src={icon} alt="stat-icon"/>
                </div>
            </div>
        )
    }
}

Stat.defaultProps = {
    stat: "",
    title: "",
    icon: "",
    color: ""
}