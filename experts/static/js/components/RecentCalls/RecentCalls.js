import React, { Component } from 'react';
import "./RecentCalls.scss";
import Recent from './Recent';

export default class RecentCalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recent_calls: [
                {
                    cost: "$12",
                    duration: "13 minutes",
                    photo: "/static/images/celine-dion.jpg",
                    name: "Celine Dion",
                    rating: 4
                },
                {
                    cost: "$45",
                    duration: "13 minutes",
                    photo: "/static/images/einstein.jpg",
                    name: "Albert Einstein",
                    rating: 4
                },
            ]
        }
    }
    render() {
        return (
            <div className={`RecentCalls ${this.props.className}`}>
                {this.state.recent_calls.map((calls) => (
                    <Recent 
                        cost= {calls.cost} 
                        duration= {calls.duration}
                        photo= {calls.photo}
                        name= {calls.name}
                        rating= {calls.rating}
                    />
                ))}
            </div>
        )
    }
}
