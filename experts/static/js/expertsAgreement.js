import React from "react";
import ReactDOM from "react-dom";
import "../../../authentication/static/js/App.scss";
import Navbar from "../../../authentication/static/js/components/Navbar/Navbar"
import TitleText from "./components/TitleText/TitleText";
import SelectInput from "./components/SelectInput/SelectInput";
import ExpertParticipationAgreement from "./components/ExpertParticipationAgreement/ExpertParticipationAgreement";

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            hasAgreed: true
        }
    }

    handleChange() {
        this.setState({
            hasAgreed: !this.state.hasAgreed
        })
    }

    handleSubmit() {
        window.location.href = "/experts/expert-participation-agreement?accepted=True"
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="container pt-5">
                <TitleText className="ml-2">
                    Please take a moment to review and agree to our updated
                    Expert Participation Agreement
                </TitleText>
                <ExpertParticipationAgreement className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </ExpertParticipationAgreement>
                <SelectInput className="mt-5" style={{
                    width: "18rem"
                }} label="Choose your area of expertise">
                    <option>Farmer</option>
                    <option>Other</option>
                </SelectInput>
                <div className="my-4">
                    <label>
                        <input value={this.state.hasAgreed} onClick={this.handleChange} type="checkbox" />
                        <span>I have read and accepted the above Expert Participation Agreement</span>
                    </label>
                </div>
                <button onClick={this.handleSubmit} disabled={this.state.hasAgreed} className="btn btn-signUp">Continue</button>
                </div>
            </>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))
