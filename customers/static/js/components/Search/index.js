import React, { Component } from 'react';
import "./Search.scss";
import SelectedFilters from './SelectedFilters';
import ExpertCard from '../../../../../core/static/js/components/ExpertCard';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilters: ["label", "label"]
        }
    }

    render() {
        return (
            <div className="row Search">
                <div className="col m2">Filter</div>
                <div className="col m9">
                    <SelectedFilters selectedFilters={this.state.selectedFilters}/>
                    <div className="pt-4">
                        <ExpertCard/>
                    </div>
                </div>
            </div>
        )
    }
}
