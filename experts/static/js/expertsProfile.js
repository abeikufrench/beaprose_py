import React from "react";
import ReactDOM from "react-dom";

import CommunicationProfile from "./components/CommunicationProfile/CommunicationProfile";
import PhotoUpload from "./components/PhotoUpload/PhotoUpload";
import RateAndAvailability from "./components/RateAndAvailability/RateAndAvailability";
import WorkHistory from "./components/WorkHistory/WorkHistory";
import FriendlyIntroduction from "./components/FriendlyIntroduction/FriendlyIntroduction";

import "../../../authentication/static/js/App.scss";
import Navbar from "../../../authentication/static/js/components/Navbar/Navbar";

import { Step, StepList } from "./components/Stepper";
import { ProfileProvider } from "./contexts/ProfileContext";

class App extends React.Component {
    render() {
        return (
            <>
            <Navbar/>
            <ProfileProvider>
            <StepList>
                <Step component={CommunicationProfile}/>
                <Step component={PhotoUpload}/>
                <Step component={FriendlyIntroduction}/>
                <Step component={WorkHistory}/>
                <Step component={RateAndAvailability}/>
            </StepList>
            </ProfileProvider>
            </>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))