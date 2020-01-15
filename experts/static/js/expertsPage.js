import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../../../authentication/static/js/App.scss";
import Navbar from "../../../authentication/static/js/components/Navbar/Navbar";

import Sidebar from "./components/Sidebar/Sidebar";
import Categories from "../../../authentication/static/js/components/Categories/Categories";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";
import Search from "./components/Search/Search";
import { CATEGORIES_URL, DASHBOARD_URL, PROFILE_URL, SETTINGS_URL, MESSAGES_URL, SEARCH_URL } from "./routes/routes";
import Container from "./components/Container/Container";

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}


class App extends React.Component {
    render() {
        return (
            <div style={{
                background: "#F9F9F9"
            }}>
                <Navbar/>
                <Sidebar/>
                <Container>
                    <Switch>
                        <Route exact path={DASHBOARD_URL} component={Dashboard}/>
                        <Route path={PROFILE_URL} component={Profile}/>
                        <Route path={SETTINGS_URL} component={Settings}/>
                        <Route path={CATEGORIES_URL} component={Categories}/>
                        <Route path={MESSAGES_URL} component={Messages}/>
                        <Route path={SEARCH_URL} component={Search}/>
                    </Switch>
                </Container>
            </div>
        )
    }
}

ReactDOM.render( <Router>
    <App/>
</Router>, document.getElementById("app"))