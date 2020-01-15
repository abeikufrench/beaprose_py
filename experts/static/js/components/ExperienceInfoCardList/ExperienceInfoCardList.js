import React from "react";
import "./ExperienceInfoCardList.scss";
import ExperienceInfoCard from "../ExperienceInfoCard/ExperienceInfoCard";

class ExperienceInfoCardList extends React.Component {
    
    render() {
        const { experiences, onDelete } = this.props;
        return (
            <div>
                {experiences.map((experience, index) => (
                    <ExperienceInfoCard key={index} onDelete={onDelete} experience={experience} allowEdit/>
                ))}
            </div>
        )
    }
}

ExperienceInfoCardList.defaultProps = {
    experiences: []
}

export default ExperienceInfoCardList;