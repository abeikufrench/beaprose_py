import React from "react";
import "./ChangeEmail.scss";
import Loader from "react-loader-spinner";
import Error from "../../../../../authentication/static/js/components/Error/Error";
import Axios from "axios";

class ChangeEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            current_email: "",
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        Axios.get("/api/current-user/").then(({ data }) => {
            this.setState({
                current_email: data.user
            })
        })
    }

    handleEmail = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    hanldeSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        Axios.post("/api/change-email/", {
            old_email: this.state.current_email,
            new_email: this.state.email
        }).then(({data}) => {
            this.setState({
                current_email: data.user,
                email: "",
                loading: false
            })
        }).catch((error) => {
            this.setState({
                loading: false,
                error: "Unable to change email. Try a different one"
            })
        })
    }

    render() {
        if(this.state.loading) {
            return <Loader 
            type="ThreeDots"
            color="gray"/>;
        }
        return (
            <div className="ChangeEmail">
                <p className="heading-text">Email</p>
                <p className="text-muted">Let us know how you would like to hear from us.
                <br/>This is also your login email.
                </p>
                <p className="email-container">
                <label>
                    <input type="checkbox" class="filled-in" checked="checked" />
                    <span>{this.state.current_email}</span>
                </label>
                </p>
                <form className="form-change-email" onSubmit={this.hanldeSubmit}>
                    <div class="row">
                        <div class="input-field col s12">
                            <input required value={this.state.email} onChange={this.handleEmail} placeholder="Email" id="email" type="email" class="validate"/>
                            <label for="email">Change Your Email</label>
                        </div>
                        <button type="submit" className="btn-save">
                            Save
                        </button>
                    {this.state.error && <Error error>{this.state.error}</Error>}
                    </div>
                </form>
                <div>
                </div>
            </div>
        )
    }
}

export default ChangeEmail;