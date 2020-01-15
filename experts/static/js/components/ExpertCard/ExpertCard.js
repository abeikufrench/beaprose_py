import React from "react";

import ViewStyleContext from "../../contexts/ViewStyleContext";
import StarRatingComponent from "react-star-rating-component";
import "./ExpertCard.scss";
import FilterList from "../FilterList/FilterList";

class ExpertCard extends React.Component {
    static contextType = ViewStyleContext;
    render() {
        const { isGridView } = this.context;
        const { expert } = this.props;
        if (isGridView) {
            return (
            <div className="ExpertCard card grid-view">
                <span className="price">{expert.pricePerCall}</span>
                <div className="card-image">
                    <img src={expert.profilePhoto} alt=""/>
                </div>
                <p className="card-title">{expert.name}</p>
                <p className="text-muted">{expert.title}</p>
                <div className="content">
                    <StarRatingComponent name="rating" starCount={5} value={expert.rating} starColor="#FFCB21"/>
                    <p><span className="num-of-customers">{expert.numOfCustomers}</span> Satisfied Customers</p>
                </div>

                <button className="btn-call">
                    Request a call
                </button>
            </div>
        )}
        else return (
            <div className="ExpertCard card list-view">
                <div className="col m3 s12">
                    <div className="card-image">
                        <img src={expert.profilePhoto} alt={expert.name}/>
                    </div>
                </div>
                <div className="col m5 s12">
                    <p className="card-title">{expert.name}</p>
                    <p className="text-muted">{expert.title}</p>
                    <p className="description">{expert.description}</p>

                    <div className="tags">
                        <FilterList filters={expert.tags} showClose={false}/>
                    </div>
                </div>
                <div className="col m4 s12">
                <p className="price">{expert.pricePerCall}</p>
                <button className="btn-call">
                    Request a call
                </button>
                <p className="rating-container">
                    <StarRatingComponent name="rating" starCount={5} value={expert.rating} starColor="#FFCB21"/>
                    <span>({expert.numOfCustomers})</span>
                </p>
                </div>
            </div>
        )
    }
}

ExpertCard.defaultProps = {
    expert: {
        pricePerCall: "GHc0.00",
        name: "",
        title: "",
        profilePhoto: null,
        description: "",
        numOfCustomers: 0,
        rating: 0
    }
}

export default ExpertCard;