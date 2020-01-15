import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import UnregisteredNavbar from "./components/UnregisteredNavbar/UnregisteredNavbar";


class App extends React.Component {
    render() {
        return (
            <div>
                <UnregisteredNavbar/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))