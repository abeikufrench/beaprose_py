import React, { Component } from 'react';
import StarRatingComponent from "react-star-rating-component";
import "./Recent.scss";

export default class Recent extends Component {
    render() {
        const { photo, name, rating, cost, duration } = this.props;
        return (
            <div className="Recent row">
                <div className="col m3 image-container">
                    <img className="image" src={photo} alt="expert-photo"/>
                </div>
                <div className="col m6">
                    <p className="title-text">{ name }</p>
                    <p className="rating">
                    <StarRatingComponent name="rating" starCount={5} value={rating} starColor="#FFCB21"/>
                    </p>
                </div>
                <div className="col m3 text-muted">
                    <p style={{
                        fontSize: "22px"
                    }}>{ cost }</p>
                    <p style={{
                        fontSize: "11px"
                    }}>{ duration }</p>
                </div>
            </div>
        )
    }
}
