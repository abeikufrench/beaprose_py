import React, { Component } from 'react';
import ProfileContext from "../../contexts/ProfileContext";


export default class RateAndAvailabilityForm extends Component {
    render() {
        const { rate_per_hour, is_long_term, is_pro_bono, handleProfileChange } = this.context
        return (
            <form>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <input value={rate_per_hour} onChange={handleProfileChange} type="number" id="rate_per_hour" name="rate_per_hour"/>
                            <label htmlFor="rate">Rate per hour($)</label>
                        </div>
                        <p className="mb-2">
                        <label>
                            <input name="is_long_term" checked={is_long_term} value={is_long_term} onChange={handleProfileChange} type="checkbox"/>
                            <span>Available for long-term projects</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input name="is_pro_bono" checked={is_pro_bono} value={is_pro_bono} onChange={handleProfileChange} type="checkbox"/>
                            <span>Available for pro bono work</span>
                        </label>
                        </p>
                    </div>
                </div>
            </form>
        )
    }
}

RateAndAvailabilityForm.contextType = ProfileContext;
