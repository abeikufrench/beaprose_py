import React, { Component } from 'react';
import "./Sidebar.scss";

import { NavLink } from "react-router-dom";
import { DASHBOARD_URL, CATEGORIES_URL, SETTINGS_URL, SEARCH_URL } from '../../routes/routes';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="Sidebar">
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <NavLink exact to={DASHBOARD_URL} activeClassName="active"><i class="material-icons left">home</i></NavLink>
                        </li>
                        <li>
                            <a activeClassName="active"><i class="material-icons left">person</i></a>
                        </li>
                        <li>
                            <NavLink to={SETTINGS_URL} activeClassName="active"><i class="material-icons left">settings</i></NavLink>
                        </li>
                        <li>
                            <NavLink to={CATEGORIES_URL} activeClassName="active"><i class="material-icons left">apps</i></NavLink>
                        </li>
                        <li>
                            <a activeClassName="active"><i class="material-icons left">mail</i></a>
                        </li>
                        <li>
                            <NavLink to={SEARCH_URL} activeClassName="active"><i class="material-icons left">search</i></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
