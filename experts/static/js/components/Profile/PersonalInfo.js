import React from "react";
import "./PersonalInfo.scss";

import SubHeading from "../SubHeading/SubHeading";
import CallButton from "../CallButton/CallButton";
import ContactInfo from "../ContactInfo/ContactInfo";

class PersonalInfo extends React.Component {

    render() {
        const { 
            contactInfo
         } = this.props;
        return (
            <div className="PersonalInfo">
                <div>
                <img width={"100%"} height={320} src={contactInfo.profilePhoto} alt={contactInfo.name}/>
                </div>
                <CallButton text="Request a call"/>
                <ContactInfo email={contactInfo.email} skype={contactInfo.skype} phoneNumber={contactInfo.phoneNumber}/>
            </div>
        )
    }
}

export default PersonalInfo;