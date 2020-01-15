import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { CATEGORIES_URL, DASHBOARD_URL, PROFILE_URL, SETTINGS_URL, MESSAGES_URL, SEARCH_URL } from '../../routes/routes';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="Sidebar">
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <NavLink exact to={DASHBOARD_URL} activeClassName="active"><i class="material-icons left">home</i>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={PROFILE_URL} activeClassName="active"><i class="material-icons left">person</i>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={SETTINGS_URL} activeClassName="active"><i class="material-icons left">settings</i>Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to={CATEGORIES_URL} activeClassName="active"><i class="material-icons left">apps</i>Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to={MESSAGES_URL} activeClassName="active"><i class="material-icons left">mail</i>Messages</NavLink>
                        </li>
                        <li>
                            <NavLink to={SEARCH_URL} activeClassName="active"><i class="material-icons left">search</i>Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
