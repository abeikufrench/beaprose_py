import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar"
import "./App.scss";

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}

class App extends React.Component {
    render() {
        console.log(window.action_url)
        return (
            <div>
                <Navbar/>
                <div className="container text-center pt-5">
                <h2 className="heading-text">Email verification successful!</h2>
                <a href={window.action_url} className="btn btn-signUp">Continue to verify your phone number!</a>
                </div>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))