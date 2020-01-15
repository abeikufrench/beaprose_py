import React, { Component } from 'react';
import Cards from "react-credit-cards";
import FloatingButton from "../FloatingButton/FloatingButton";
import "./BillingForm.scss";

export default class BillingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvc: "",
            expiry: "",
            focus: "",
            name: "",
            number: "",
            delete: false
        }
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleDelete = (e) => {
        this.setState({
            delete: true
        })
    }

    render() {
        if(this.state.delete) return null;
        else return (
            <div className={`BillingForm ${this.props.className}`}>
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focus={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    preview={false}
                />
                <form className="ml-3">
                    <div className="input-field col s12">
                        <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div className="input-field col s12">
                        <input
                        type="tel"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                        type="tel"
                        name="expiry"
                        placeholder="Valid Thru"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        preview={true}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        />
                    </div>
                <div className="action-container mt-3">
                    <FloatingButton color="#343434" icon="delete" onClick={this.handleDelete}/>
                </div>
                </form>
            </div>
        )
    }
}
