import React, { Component } from 'react';
import "./Settings.scss";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import { CHANGE_EMAIL_URL, CHANGE_BILLING_URL, PAYMENT_HISTORY_URL, CHANGE_PASSWORD_URL } from '../../routes/routes';
import ChangeEmail from "../ChangeEmail/ChangeEmail";
import ChangeBilling from "../ChangeBilling/ChangeBilling";
import Payment from "../Payment/Payment";
import ChangePassword from "../ChangePassword/ChangePassword";

export default class Settings extends Component {
    render() {
        return (
            <div className="Settings">
                <Sidenav/>
                <Switch>
                    <Route path={CHANGE_EMAIL_URL} component={ChangeEmail}/>
                    <Route path={CHANGE_BILLING_URL} component={ChangeBilling}/>
                    <Route path={PAYMENT_HISTORY_URL} component={Payment}/>
                    <Route path={CHANGE_PASSWORD_URL} component={ChangePassword}/>
                </Switch>
            </div>
        )
    }
}
