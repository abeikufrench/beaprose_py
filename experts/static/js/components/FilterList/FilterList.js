import React from "react";
import Proptypes from "prop-types";
import "./FilterList.scss";
import Filter from "../Filter/Filter";

class FilterList extends React.Component {

    render() {
        const { filters, showClose } = this.props;
        return (
            <div className="FilterList">
                {filters.map((filter) => (
                    <Filter showClose={showClose} filter={filter}/>
                ))}
            </div>
        )
    }
}

FilterList.defaultProps = {
    filters: []
}

export default FilterList;