import React from "react";
import M from "materialize-css";
import "./SelectInput.scss";

const selectRef = React.createRef()

class SelectInput extends React.Component {

    componentDidMount() {
        M.FormSelect.init(selectRef.current, {
            classes: "SelectInput"
        })
    }

    render() {
        return (
            <div className={`input-field ${this.props.className}`} style={this.props.style}>
                <select ref={selectRef} {...this.props}>
                    {this.props.children}
                </select>
                <label>{this.props.label}</label>
            </div>
        )
    }
}

export default SelectInput;