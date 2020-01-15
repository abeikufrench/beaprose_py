import React from "react";
import "./CategoryImage.scss";
import CityView from "../../../images/city-view.png";

class CategoryImage extends React.Component {
    render() {
        return (
            <div className="CategoryImage" style={{
                background: `url(/static/bundles/${CityView})`,
                }}>
                <h3 style={{margin:0, padding:0}}>Categories</h3>
                <p class="text-muted">Expert advice over the phone on everything you own, <br/>
                    Anytime you need it
                </p>
            </div>
        )
    }
}

export default CategoryImage;