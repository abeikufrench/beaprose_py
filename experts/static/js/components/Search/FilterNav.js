import React from "react";
import "./FilterNav.scss";
import SelectInput from "../SelectInput/SelectInput";

class FilterNav extends React.Component {
    
    render() {
        return (
            <div className="FilterNav col m2">
                <p className="filter-text">Filters</p>
                <SelectInput className="filter-item" label="Sorting by">
                    <option value="Hi">Rating</option>
                </SelectInput>
                <SelectInput label="Category">
                    <option value="Hi">All</option>
                </SelectInput>
                <SelectInput className="filter-item" label="Country">
                    <option value="Hi">All</option>
                </SelectInput>
                <SelectInput className="filter-item" label="City">
                    <option value="Hi">All</option>
                </SelectInput>
                <SelectInput className="filter-item" label="Expert Language">
                    <option value="eng">English</option>
                    <option value="fr">French</option>
                </SelectInput>
                <SelectInput className="filter-item" label="Star Rating">
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </SelectInput>
            </div>
        )
    }
}

export default FilterNav;