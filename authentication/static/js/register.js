import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register/Register";
import UnregisteredNavbar from "./components/UnregisteredNavbar/UnregisteredNavbar";
import "./App.scss";

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
                <Register/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))