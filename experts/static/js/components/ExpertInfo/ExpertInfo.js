import React, { Component } from 'react'
import "./ExpertInfo.scss";
import StarRatingComponent from 'react-star-rating-component';

class ExpertInfo extends Component {
    render() {
        return (
            <div className="ExpertInfo">
                <div className="first">
                    <span className="text-muted">
                        <i style={{
                            fontSize: "2rem",
                            color: "rgba(0, 0, 0, 0.2)",
                            margin: 0
                        }} className="material-icons left">add_location</i>
                        San Franscisco Bay Area</span>
                    <span>
                        <StarRatingComponent className="rating" name="rating" starCount={5} value={4} starColor="#FFCB21"/>
                    </span>
                </div>
                <div className="second">
                    <span className="heading-text expert-name">Augustine Smith</span>
                    <span className="heading-text expert-price">$8.33</span>
                </div>
                <div className="third mb-2">
                    <span className="text-muted">Strategy & Finance Leader</span>
                    <span className="text-muted">per minute</span>
                </div>
                <p className="text-muted mb-2">
                Unique martial art classes where despite of the age you / 
                your children will be excited to attend – 
                from fitness exercises with or without the equipment, 
                acrobatic tricks and classic martial art techniques 
                through the pair / team development games, self-defence techniques 
                and real street situations to film-making stunts, sparring competitions and 
                complete psychophysiological well-being – all that packed with action and fun 
                from the Vietnamese ancient Martial Art school Nhat Nam. Kids and adults will 
                learn lot new things about the mind, the body and relation with the world and 
                other people, get well and fit, have great fun and develop new skills and habits. 
                Also, lack of discipline so popular in Britain and we offer to help you educating 
                and bringing up your children through our bespoke classes.
                </p>
            </div>
        )
    }
}

export default ExpertInfo
