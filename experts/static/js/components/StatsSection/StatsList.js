import React, { Component } from 'react';
import "./StatsList.scss";
import Stat from './Stat';

export default class StatsList extends Component {
    render() {
        const { statsList} = this.props;
        return (
            <div className="StatsList">
                {statsList.map(({stat, title, icon, color}) => (
                    <Stat stat={stat} title={title} icon={icon} color={color}/>
                ))}
            </div>
        )
    }
}

React.defaultProps = {
    statsList: []
}
