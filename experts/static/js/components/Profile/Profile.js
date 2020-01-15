import React from "react";
// import PersonalInfo from "./PersonalInfo";

// import FilterList from "../FilterList/FilterList";

import "./Profile.scss";
import ContactInfo from "../ContactInfo/ContactInfo";
import ExperienceInfo from "../ExperienceInfo/ExperienceInfo";
import ExpertInfo from "../ExpertInfo/ExpertInfo";
// import FeedbackInfo from "../FeedbackInfo/FeedbackInfo";
// import ExpertInfo from "../ExpertInfo/ExpertInfo";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: {
                name: "Augustine Smith",
                email: "absaugustineflash@gmail.com",
                skype: "daFL45H",
                phoneNumber: "+233553847137"
            },
            keywords: ["Finance", "Strategy"],
            sectors: ["Auditing", "Research", "Telecommunications", "Management"],
            feedbacks: [
            ],
            allowContactEdit: false
        }
    }

    handleContactEdit = () => {
        this.setState({
            allowContactEdit: !this.state.allowContactEdit
        })
    }

    render() {
        const { name, email, skype, phoneNumber} = this.state.contactInfo;
        return (
            <div className="row Profile">
                <div className="col m4">
                    <ContactInfo onChangeEditMode={this.handleContactEdit} phoneNumber={phoneNumber} email={email} skype={skype} edit={this.state.allowContactEdit}/>
                </div>
                <div className="col m8">
                    <ExpertInfo/>
                    <ExperienceInfo/>
                </div>
            </div>
        )
    }
}

export default Profile