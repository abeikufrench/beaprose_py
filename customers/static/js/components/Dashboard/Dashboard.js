import React, { Component } from 'react';
import "./Dashboard.scss";
import Calendar from '../../../../../experts/static/js/components/Calendar';

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
                        
                    </div>
                    <div className="col m4 right-bar" style={{
                            paddingRight: "20px",
                            paddingLeft: "20px",
                            paddingBottom: "3rem",
                            paddingTop: "2rem"
                    }}>
                        <Calendar style={style} 
                            onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
                    </div>
                </div>
            </div>
        )
    }
}
