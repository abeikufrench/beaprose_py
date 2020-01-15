import React, { Component } from 'react';
import ReactDOM from "react-dom";
import UnregisteredNavbar from "./components/UnregisteredNavbar/UnregisteredNavbar";
import "./App.scss";
import LandingPage from './components/LandingPage/LandingPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <UnregisteredNavbar/>
                <LandingPage/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("app"))