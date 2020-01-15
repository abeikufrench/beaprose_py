import React from "react";
import "./ContactInfo.scss";
import SubHeading from "../SubHeading/SubHeading";

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            skype: "",
            phoneNumber: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    render() {
        const { email, skype, phoneNumber, edit, onChangeEditMode } = this.props;
        return (
            <div class="ContactInfo">
                <SubHeading>
                    Contact
                    <i className="material-icons edit-icon" onClick={onChangeEditMode}>create</i>
                </SubHeading>
                <ul>
                    <li>
                        <h4>Email</h4>
                        {edit ? <input className="search-input" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} id="email"/> : <p>{email}</p>}
                    </li>
                    <li>
                        <h4>Skype Name</h4>
                        {edit ? <input className="search-input" placeholder="Skype Number" value={this.state.skype} onChange={this.handleChange} id="skype"/> : <p>{skype}</p>}
                    </li>
                    <li>
                        <h4>Phone</h4>
                        {edit ? <input className="search-input" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} id="phoneNumber"/> : <p>{phoneNumber}</p>}
                    </li>
                </ul>
            </div>
        )
    }
}

ContactInfo.defaultProps = {
    email: "",
    skype: "",
    phoneNumber: ""
}

export default ContactInfo;