import React, { Component } from 'react';
import Creatable from "react-select/creatable";
import Loader from "react-loader-spinner";
import SelectInput from "../SelectInput/SelectInput";
import ProfileContext from "../../contexts/ProfileContext";
import Axios from 'axios';
import "./CommunicationForm.scss";

export default class CommunicationForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            timezones: null,
            countries: null,
            languages: []
        }
    }

    componentDidMount() {
        const API_KEY = "RRQ0L8RI2W1Q";
        Axios.get("http://api.timezonedb.com/v2.1/list-time-zone", {
            params: {
                key: API_KEY,
                format: "json"
            }
        }).then((result) => {
            this.setState({
                timezones: result.data.zones
            })
        });

        Axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
            this.setState({
                countries: result.data
            })
        })
    }

    handleChange(newValue) {
        this.setState({
            languages: newValue
        })
    }

    render() {
        const { timezone, country, city, skype_number, phoneNumber, languages, handleProfileChange, handleLanguageChange } = this.context;
        if(!this.state.timezones || !this.state.countries) return <Loader
            type="ThreeDots"
            color="gray"
        />
        else return (
            <form className="CommunicationForm">
                <div className="row">
                <div className="col m6 s12">
                <SelectInput value={timezone} onChange={handleProfileChange} name="timezone" onChange={handleProfileChange} className="col s12" label="Time Zone">
                    {this.state.timezones.map((timezone, index) => (
                        <option key={index} value={`${timezone.countryCode} - ${timezone.zoneName}`}>{`${timezone.countryCode} - ${timezone.zoneName}`}</option>
                    ))}
                </SelectInput>
                <SelectInput value={country} id="country" name="country" onChange={handleProfileChange} className="col s6" label="Country">
                    {this.state.countries.map((country, index) => (
                        <option key={index} value={`${country.name}`}>{`${country.name}`}</option>
                    ))}
                </SelectInput>
                <div className="input-field col s6">
                    <input value={city} id="city" type="tel" name="city" onChange={handleProfileChange}/>
                    <label className="active" htmlFor="city">City</label>
                </div>
                <div className="input-field col s12">
                    <input value={skype_number} id="skype_number" type="tel" name="skype_number" onChange={handleProfileChange}/>
                    <label className="active" htmlFor="skype_number">Skype Number</label>
                </div>
                <div className="input-field col s12">
                    <input value={phoneNumber} id="phoneNumber" onChange={handleProfileChange} type="tel" name="phoneNumber"/>
                    <label className="active" htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div className="col s12">
                <Creatable
                        isMulti
                        value={languages}
                        id="languages"
                        className="select-field mt-3"
                        classNamePrefix="select"
                        placeholder="Languages"
                        name="languages"
                        onChange={handleLanguageChange}
                        options={this.state.languages}
                    />
                </div>
                </div>
                </div>
            </form>
        )
    }
}

CommunicationForm.contextType = ProfileContext;

