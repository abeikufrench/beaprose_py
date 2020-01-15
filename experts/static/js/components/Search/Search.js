import React, { Component } from 'react';
import "./Search.scss"
import FilterNav from './FilterNav';

export default class Search extends Component {
    render() {
        return (
            <div className="Search row">
                <FilterNav/>
                <div class="expert-list col m10">

                </div>
            </div>
        )
    }
}
