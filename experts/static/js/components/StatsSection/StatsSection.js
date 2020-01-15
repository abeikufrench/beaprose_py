import React, { Component } from 'react'
import StatsList from './StatsList';

export default class StatsSection extends Component {
    state = {
        stats: [
            {
                title: "Earned today",
                stat: "$54",
                icon: "/static/images/earned-today.svg",
                color: "linear-gradient(71.98deg, #07C2D6 1.74%, #61EB5B 100%)"
            },
            {
                title: "Amount Owed",
                stat: "$158",
                icon: "/static/images/amount-owed.svg",
                color: "linear-gradient(248.2deg, #FEC867 0%, #F72C61 100%)"
            },
            {
                title: "Call acceptance rate",
                stat: "23%",
                icon: "/static/images/acceptance-rate.svg",
                color: "linear-gradient(248.2deg, #0EACD2 0%, #9833FD 100%)"
            },
            {
                title: "Dropped calls",
                stat: "23%",
                icon: "/static/images/missed-call.svg",
                color: "linear-gradient(248.2deg, #FFCB21 0%, #F76C4B 100%)"
            },
        ]
    }
    render() {
        return (
            <StatsList statsList={this.state.stats}/>
        )
    }
}
