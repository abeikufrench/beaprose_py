import React from "react";
import "./ExperienceInfo.scss";
import SubHeading from "../SubHeading/SubHeading";
import ExperienceInfoCardList from "../ExperienceInfoCardList/ExperienceInfoCardList";


class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            experiences: [
                {
                    id: 0,
                    company: "Media General Limited, Ghana",
                    position: "Head of Strategy and Quality Assurance",
                    image: "/static/images/photo.svg",
                    duration: "2011 - 2018",
                    filters: ["Audit", "Strategy", "Finance"]
                },
            ]
        }
    }

    handleAdd = () => {
        this.setState({
            id: this.state.id + 1,
            experiences: [...this.state.experiences, {
                id: this.state.id,
                company: "",
                position: "",
                image: "/static/images/photo.svg",
                duration: "",
                filters: []
            }]
        })
    }

    handleDelete = (expId) => {
        console.log(expId);
        this.setState({
            experiences: this.state.experiences.filter(experience => {
                return expId != experience.id
            })
        })
    }

    render() {
        return (
            <div className="ExperienceInfo">
                <SubHeading>
                    Experience
                    <i className="material-icons" onClick={this.handleAdd}>add</i>
                </SubHeading>
                <ExperienceInfoCardList onDelete={this.handleDelete} experiences={this.state.experiences}/>
            </div>
        )
    }
}

export default ExperienceInfo;