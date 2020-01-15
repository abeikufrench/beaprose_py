import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
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
                <Navbar/>
                <div class="container text-center mt-4" style={{
                    height: "400px"
                }}>
                    <h3>
                        An SMS with a verification code has been sent to your phone.
                    </h3>
                    <p class="muted-text">Enter the code here</p>
                    <br/>
                    <form method="POST" action={window.action_url}>
                        <input required class="bs-bp-form-control" placeholder="Verification Code" type="number" name="code" id="code"/>
                        <input class="btn btn-secondary btn-raised" type="submit" value="Submit"/>
                    </form>
                    </div>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))