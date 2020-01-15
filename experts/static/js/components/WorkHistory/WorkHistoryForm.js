import React, { Component } from 'react';
import "./WorkHistoryForm.scss";
import Loader from "react-loader-spinner";
import Creatable from "react-select/creatable";
import ProfileContext from "../../contexts/ProfileContext";
import SelectInput from "../SelectInput/SelectInput";
import Datepicker from '../Datepicker/Datepicker';
import Axios from 'axios';

export default class WorkHistoryForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            options: [],
            countries: null
        }
    }

    componentDidMount() {
        Axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
            this.setState({
                countries: result.data
            })
        })
    }

    handleChange(newValue) {
        this.setState({
            options: newValue
        })
    }

    render() {
        const { 
            job_title, 
            country_work,
            city_work, 
            role, 
            handleProfileChange, 
            skills, 
            start_date, 
            end_date, 
            handleSkillsChange,
            handleChangeStartDate, 
            handleChangeEndDate 
        } = this.context;
        if(!this.state.countries) return <Loader
        type="ThreeDots"
        color="gray"
        />
        return (
            <form className="row WorkHistoryForm">
                <div className="col s6">
                    <div className="input-field col s12">
                        <input value={job_title} onChange={handleProfileChange} id="job_title" type="text" name="job_title"/>
                        <label className="active" htmlFor="job_title">Title</label>
                    </div>
                    <SelectInput value={country_work} onChange={handleProfileChange} name="country_work" id="countryWork" className="col s6" label="Country">
                    {this.state.countries.map((country, index) => (
                        <option key={index} value={`${country.name}`}>{`${country.name}`}</option>
                    ))}
                    </SelectInput>
                    <div className="input-field col s6">
                        <input value={city_work} onChange={handleProfileChange} id="city_work" type="tel" name="city_work"/>
                        <label className="active" htmlFor="city_work">City</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={role} onChange={handleProfileChange} id="role" type="tel" name="role"/>
                        <label className="active" htmlFor="role">Type of Role</label>
                    </div>
                    <Datepicker value={start_date} name="start_date" onChangeDate={handleChangeStartDate} prefix className="col s6" label="Start Date"/>
                    <Datepicker value={end_date} name="end_date" onChangeDate={handleChangeEndDate} prefix className="col s6" label="End Date"/>
                    <div className="col s12">
                    <Creatable
                        isMulti
                        value={skills}
                        className="select-field mt-3"
                        classNamePrefix="select"
                        placeholder="Skills"
                        onChange={handleSkillsChange}
                        options={skills}
                    />
                    </div>
                </div>
            </form>
        )
    }
}

WorkHistoryForm.contextType = ProfileContext;
