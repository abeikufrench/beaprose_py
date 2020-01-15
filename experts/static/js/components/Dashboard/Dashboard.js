import React, { Component } from 'react';
import Calendar from "../Calendar";
import "./Dashboard.scss";
import StatsSection from '../StatsSection/StatsSection';
import GraphSection from "../GraphSection/GraphSection";
import RecentCalls from '../RecentCalls/RecentCalls';

const style = {
    position: "relative",
}

export default class Dashboard extends Component {

    onDayClick = (e, day) => {
        alert(day);
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="row">
                    <div className="col m8 s12">
                        <StatsSection/>
                        <GraphSection/>
                    </div>
                    <div className="col m4 right-bar" style={{
                            paddingRight: "20px",
                            paddingLeft: "20px",
                            paddingBottom: "3rem",
                            paddingTop: "2rem"
                    }}>
                        <Calendar style={style} 
                            onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
                        <RecentCalls className="mt-5"/>
                    </div>
                </div>
            </div>
        )
    }
}
