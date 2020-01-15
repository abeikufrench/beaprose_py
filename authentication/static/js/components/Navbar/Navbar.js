import React from "react";
import M from "materialize-css";
import "./Navbar.scss";
import Logo from "../../../images/logo.png";
import PersonCircleIcon from "../../../images/person.svg";
import Loader from "./Loader";
import Axios from "axios";
import ResultList from "./ResultList";

const EXPERTS_LIST_URL = "/api/experts/";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownRef = React.createRef();
        this.state = {
            search: "",
            results: null,
            showResults: false
        }
    }

    componentDidMount() {
        M.Dropdown.init(this.dropdownRef.current, {
            coverTrigger: false,
            constrainWidth: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        Axios.get(EXPERTS_LIST_URL, {
            params: {
                s: this.state.search
            }
        }).then(({data}) => {
            console.log(data[0].user)
            this.setState({
                results: data
            })
        }).catch(() => {

        })
    }

    handleFocus = (e) => {
        this.setState({
            showResults: true
        })
    }

    handleBur = (e) => {
        this.setState({
            showResults: false
        })
    }

    render() {
        return (
            <nav className="Navbar">
                <div className="nav-wrapper">
                <a activeClassName="active" className="brand-logo">
                    <img src={`/static/${Logo}`} alt="logo"/>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li className="search-container">
                        <input width="100%" id="search" onBlur={this.handleBur} onFocus={this.handleFocus} value={this.state.search} onChange={this.handleChange} className="search-input" type="search" placeholder="Find an expert"/>
                        {this.state.showResults && 
                        <ul className="search-results">
                            
                            {this.state.results && this.state.search.length > 0 ? <>
                                <ResultList results={this.state.results}/>
                            </> : <Loader/>}
                        </ul>}
                    </li>
                    <li>
                        <a>
                            <i className="material-icons large">apps</i>
                        </a>
                    </li>
                    <li>
                        <a>
                        <i className="material-icons large">mail</i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="material-icons large">search</i>   
                        </a>
                    </li>
                    <li>
                        <a ref={this.dropdownRef} className="active dropdown-trigger" data-target="user-dropdown">
                            <img height="inherit" src="/static/images/person.svg" alt="profile photo"/>    
                        </a>
                    </li>
                </ul>
                </div>
                <ul id='user-dropdown' className='dropdown-content'>
                    <li><a href="/logout/">Logout</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;