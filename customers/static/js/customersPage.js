import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../../../authentication/static/js/App.scss";
import Navbar from "../../../authentication/static/js/components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { PROFILE_URL, DASHBOARD_URL, SETTINGS_URL, CATEGORIES_URL, SEARCH_URL } from "./routes/routes";
import Dashboard from "./components/Dashboard/Dashboard";
import Container from "../../../experts/static/js/components/Container/Container";
import Categories from "../../../authentication/static/js/components/Categories/Categories";
import Settings from "./components/Settings/Settings";
import Search from "./components/Search";


class App extends React.Component {
    render() {
        return (
            <div style={{
                background: "#F9F9F9"
            }}>
               <Navbar/>
               <Sidebar/>
               <Container style={{
                   marginLeft: "60px"
               }}>
               <Switch>
                   <Route exact path={DASHBOARD_URL} component={Dashboard}/>
                   {/* <Route path={PROFILE_URL} component={}/> */}
                   <Route path={SETTINGS_URL} component={Settings}/>
                   <Route path={CATEGORIES_URL} component={Categories}/>
                   <Route path={SEARCH_URL} component={Search}/>
               </Switch>
               </Container>
            </div>
        )
    }
}

ReactDOM.render(<Router>
    <App/>
</Router>, document.getElementById("app"))