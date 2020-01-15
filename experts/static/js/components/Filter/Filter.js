import React from "react";
import "./Filter.scss";

class Filter extends React.Component {
    render() {
        const {filter, showClose } = this.props
        return (
            <span className="Filter">
                <span style={{
                    marginRight: "2px"
                }}>{filter}</span>
                {showClose && <span className="close-icon">x</span>}
            </span>
        )
    }
}

Filter.defaultProps = {
    filter: "",
    showClose: true
}

export default Filter;