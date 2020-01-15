import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.scss";
import { CHANGE_EMAIL_URL , CHANGE_BILLING_URL , PAYMENT_HISTORY_URL , CHANGE_LOCATION_URL , CHANGE_PASSWORD_URL, CHANGE_COMMUNICATION_URL, CHANGE_RATE_AND_AVAILABILITY_URL  } from "../../routes/routes";

class Sidenav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <nav className="Sidenav">
                <div className="nav-wrapper">
                    <ul>
                        <li className="spacing"></li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_EMAIL_URL}>Email</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_BILLING_URL}>Billing</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={PAYMENT_HISTORY_URL}>Payment</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_COMMUNICATION_URL}>Communication</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_LOCATION_URL}>Location</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_PASSWORD_URL}>Change Password</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={CHANGE_RATE_AND_AVAILABILITY_URL}>Rate and Availability</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidenav;