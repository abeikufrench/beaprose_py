import React, { Component } from 'react';
import "./Datepicker.scss";
import M from "materialize-css";

export default class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef()
    }

    componentDidMount() {
        const datepicker = M.Datepicker.init(this.ref.current, this.props.options);
        datepicker.options.onSelect = (newDate) => {
            this.props.onChangeDate(newDate);
        }
    }

    render() {
        const { className, prefix, label, name, value, onChange } = this.props;
        return (
            <div className={`input-field Datepicker ${ className }`}>
                { prefix && <i className="material-icons prefix" style={{color: "grey"}}>date_range</i> }
                <input {...this.props} type="text" className="datepicker" ref={this.ref} name={name} value={value} onChange={onChange} />
                {label && <label>{label}</label>}    
            </div>
        )
    }
}
