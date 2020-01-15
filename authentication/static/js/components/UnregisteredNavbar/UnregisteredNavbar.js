import React, { Component } from 'react';
import Logo from "../../../images/logo.png";
import "./UnregisteredNavbar.scss";

export default class UnregisteredNavbar extends Component {
    render() {
        return (
            <nav className="UnregisteredNavbar">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo ml-5">
                  <img src={`/static/${Logo}`} alt="logo"/>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down mr-3">
                <li><a href="/interest-in-experts/">How to become an expert</a></li>
                <li><a href="/categories/">Categories</a></li>
                <li><a className="text-bold" href="/login/">Log In</a></li>
                <li><a className="btn btn-signUp" href="/register/">Sign Up</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}
