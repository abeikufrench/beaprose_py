import React from 'react';
import FilterList from "../../../../../experts/static/js/components/FilterList/FilterList";

export default function SelectedFilters(props) {
    const { selectedFilters } = props;
    return (
        <div>
            <span className="text-muted mr-3">Selected Filters</span>
            <FilterList filters={selectedFilters}/>
        </div>
    )
}
