import React from "react";
import "./ChangePassword.scss";
import Error from "../../../../../authentication/static/js/components/Error/Error";
import Axios from "axios";

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: "",
            password1: "",
            password2: "",
            loading: false,
            error: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });
        console.log(this.state.password1 === this.state.password2)
        if(this.formValid()) {
            const email = localStorage.getItem("email")
            Axios.post("/api/change-password/", {
                email,
                password: this.state.password1
            }).then(() => {
                alert("Password has been change successfully!!");
            }).catch(() => {
                this.setState({
                    error: "Error changing password!! Try a stronger one."
                })
            })
        }
        this.setState({
            loading: false
        })
    }

    formValid = () => {
        let errors = [];
        let error;
        if(!this.isEqualPassword()) {
            // error = "Passwords must be equal!!";
            // errors.push(error);
            // this.setState({
            //     errors: [...errors]
            // })
            alert("Passwords must be equal!");
            return false;
        } 
        if(!this.checkPasswordMatch()) {
            // error=  "Passwords do not match!!";
            // errors.push(error);
            // this.setState({
            //     errors: [...errors]
            // })
            alert("Old passwords do not match!");
            return true;
        };
        return true;
    }

    isEqualPassword = () => {
        return this.state.password1 === this.state.password2;
    }

    checkPasswordMatch = () => {
        const email = localStorage.getItem("email")
        Axios.post("/api/check-password/", {
            email,
            old_password: this.state.old_password   // check if the old password is right
        }).then(({data}) => {
            return false;
        }).catch(() => {
            console.log("hello")
            return true;
        })
    }
    
    render() {
        return (
            <div className="ChangePassword">
                <p class="heading-text mb-1">Change Password</p>
                <p className="text-muted">Don't remember your password? Create new one.</p>

                <form onSubmit={this.handleSubmit} class="form-change-password row">
                <div class="input-field col s8">
                    <input required onChange={this.handleChange} value={this.state.old_password} id="old_password" type="password" class="validate"/>
                    <label for="password">Old Password</label>
                </div>
                <div class="input-field col s8">
                    <input required onChange={this.handleChange} value={this.state.password1} id="password1" type="password" class="validate"/>
                    <label for="password">New Password</label>
                </div>
                <div class="input-field col s8">
                    <input required onChange={this.handleChange} value={this.state.password2} id="password2" type="password" class="validate"/>
                    <label for="password">Confirm Password</label>
                </div>
                <div className="col s8">
                    <button type="submit" className="btn-save">
                        Save
                    </button>
                    {this.state.errors && <Error error>
                        <ul>
                        {this.state.errors.map((error) => (
                            <li>{error}</li>
                        ))}
                        </ul>
                    </Error>}
                </div>
                </form>
            </div>
        )
    }
}

export default ChangePassword;