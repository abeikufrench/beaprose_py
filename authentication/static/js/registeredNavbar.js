import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))