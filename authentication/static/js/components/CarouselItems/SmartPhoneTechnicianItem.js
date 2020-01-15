import React, { Component } from 'react';
import "./SmartPhoneTechnicianItem.scss";

export default class SmartPhoneTechnicianItem extends Component {
    render() {
        return (
            <div className="SmartPhoneTechnicianItem">
                <h3 className="text-container">
                    <h1 className="heading-text text-center">352</h1><br/>
                    Smartphone Technicians are ready to help you in seconds
                </h3>
                <a href="#" className="btn btn-signUp">Talk to a technician</a>
            </div>
        )
    }
}
