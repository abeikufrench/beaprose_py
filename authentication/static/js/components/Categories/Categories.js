import React from "react";
import "./Categories.scss";
import CategoryImage from "./CategoryImage";

import BusinessIcon from "../../../images/business.svg";
import FinancialPlanningIcon from "../../../images/financial-planning.svg";
import CarsIcon from "../../../images/car-insurance.svg";
import HealthWellnessIcon from "../../../images/health-wellness.svg";
import MobileIcon from "../../../images/mobile.svg";
import TVIcon from "../../../images/tv.svg";
import HomeAppliancesIcon from "../../../images/home-appliance.svg";
import PlumbingIcon from "../../../images/plumbing.svg";
import CategorySection from "./CategorySection";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section1: [
                {
                    image: CarsIcon,
                    title: "Cars & Trucks",
                    categories: ["Acura", "Audi", "BMW", "Buick", "Chevrolet", "FIAT"]
                },
            ],
            section2: [
                {
                    image: BusinessIcon,
                    title: "Business",
                    categories: ["Business Plans", "Career", "Presentations"]
                },
                {
                    image: FinancialPlanningIcon,
                    title: "Financial Planning",
                    categories: ["Mortgages", "Retirement"]
                },
                {
                    image: HealthWellnessIcon,
                    title: "Health & Wellness",
                    categories: ["Diabetes", "Diet & Nutrition"]
                }
            ],
            section3: [
                {
                    image: HomeAppliancesIcon,
                    title: "Home Appliances",
                    categories: ["Coffee Maker", "Dishwashers", "Microwaves", "Vaccuum"]
                },
                {
                    image: PlumbingIcon,
                    title: "Plumbing",
                    categories: ["Plumbing"]
                }
            ],
            section4: [
                {
                    image: MobileIcon,
                    title: "SmartPhones",
                    categories: ["Apple", "ASUS", "Blackberry", "Samsung", "Windows"]
                },
                {
                    image: TVIcon,
                    title: "TV & Video",
                    categories: ["TV & Video"]
                },
            ]
        }
    }

    render() {
        return (
            <div className="Categories">
                <CategoryImage/>
                <section>
                    <div className="categories">
                        <div className="row">
                            <div className="col m3">
                                <CategorySection categorySection={this.state.section1}/>
                            </div>
                            <div className="col m3">
                                <CategorySection categorySection={this.state.section2}/>
                            </div>
                            <div className="col m3">
                                <CategorySection categorySection={this.state.section3}/>
                            </div>
                            <div className="col m3">
                                <CategorySection categorySection={this.state.section4}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Categories;