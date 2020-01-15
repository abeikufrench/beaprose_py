import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register/Register";
import "./App.scss";
import UnregisteredNavbar from "./components/UnregisteredNavbar/UnregisteredNavbar";
import Categories from "./components/Categories/Categories";


class App extends React.Component {
    render() {
        return (
            <div>
                <UnregisteredNavbar/>
                <Categories/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))