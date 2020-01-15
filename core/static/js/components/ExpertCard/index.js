import React, { Component } from 'react';
import "./ExpertCard.scss";
import StarRatingComponent from "react-star-rating-component";
import FilterList from '../../../../../experts/static/js/components/FilterList/FilterList';

export default class ExpertCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: ["identity", "UX"]
        }
    }

    render() {
        return (
            <div className="ExpertCard row py-2">
                <div className="col m2 text-center pt-5">
                    <img className="profile-photo mt-4" src="/static/images/einstein.jpg" alt="photo"/>
                </div>
                <div className="col m7">
                    <p className="mini-heading-text" style={{
                        textTransform: "capitalize"
                    }}>Augustine Smith</p>
                    <p style={{marginTop: "0"}} className="text-muted">Product & Design Identity</p>
                    <p className="my-2" style={{fontFamily:"Roboto"}}>
                        I act as a middleman between Government of St.Kitts and a Client.
                        Providing second passport and tax efficiency solutions under the current St Kitts & Nevis Citizenship By Investment Programme (“CBI”). Whatever your economic bracket and or specific 
                        circumstances we will custom make a solution for you under the CBI programme. 
                    </p>
                    <FilterList filters={this.state.filters}/>
                </div>
                <div className="col m3">
                    <h5 className="heading-text text-center">$8.33</h5>
                    <button className="btn-call">Request a call</button>
                    <div className="text-center pt-3">
                        <StarRatingComponent name="rating" starCount={5} value={2} starColor="#FFCB21"/>
                    </div>
                </div>
            </div>
        )
    }
}
