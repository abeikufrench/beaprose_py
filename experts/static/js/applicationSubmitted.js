import React from "react";
import ReactDOM from "react-dom";

import "../../../authentication/static/js/App.scss";
import Navbar from "../../../authentication/static/js/components/Navbar/Navbar";
import HeadingText from "./components/HeadingText/HeadingText";

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}


class App extends React.Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="container text-center" style={{
                marginTop: "10rem"
            }}>
                <HeadingText className="text-center mb-5">Application Submitted!!!</HeadingText>
                <a className="btn btn-signUp">Start Compliance Training</a>
            </div>
            </>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))