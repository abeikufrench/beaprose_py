import React from "react";
import ReactDOM from "react-dom";
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
                <div className="container text-center" style={{marginTop: "5rem"}}>
                    <h3 className="heading-text">
                        Are you interested in finding an expert or becoming an expert?
                    </h3>
                    <p className="text-muted mb-3">You can always change this later</p>
                    <div className="text-center">
                        <a href="#" className="btn btn-signUp mr-2">Find an expert</a>
                        <a href="/expert/register/" className="btn btn-tertiary text-white">Become an expert</a>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))