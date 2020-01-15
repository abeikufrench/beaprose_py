import React from "react";
import ReactDOM from "react-dom";
import UnregisteredNavbar from "./components/UnregisteredNavbar/UnregisteredNavbar";
import "./App.scss";
import Login from "./components/Login/Login";

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}

class App extends React.Component {
    render() {
        return (
            <div>
                <UnregisteredNavbar/>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))