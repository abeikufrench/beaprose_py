import React, { Component, createContext } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { getCurrentUser } from "../../../../core/static/js/utils";

const ProfileContext = createContext();

const EXPERT_UPDATE_URL = "/api/expert-update/";

export class ProfileProvider extends Component {
    constructor(props) {
        super(props);
        // this.handleProfileSubmit = this.handleProfileSubmit.bind(this)
        this.state = {
            headline: "",
            short_bio: "",
            languages: "",  // todo
            sectors: [],
            keywords: [],
            profilePhoto: "",
            job_title: "",
            country_work: "",
            city_work: "",
            role: "",
            start_date: "",
            end_date: "", 
            skills: [],
            rate_per_hour: 0,
            is_long_term: false,
            is_pro_bono: false,
            timezone: "",
            country: "",
            city: "",
            skype_number: "",
            phoneNumber: ""
        }
    }

    handleProfileChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeStartDate = (newDate) => {
        this.setState({
            start_date: newDate
        })
    }

    handleChangeEndDate = (newDate) => {
        this.setState({
            end_date: newDate
        })
    }

    handleLanguageChange = (newValue) => {
        this.setState({
            languages: newValue
        })
    }

    handleKeywordsChange = (newValue) => {
        this.setState({
            keywords: newValue
        })
    }

    handleSectorsChange = (newValue) => {
        this.setState({
            sectors: newValue
        })
    }

    handleSkillsChange = (newValue) => {
        this.setState({
            skills: newValue
        })
    }

    handlePhotoChange = (newPhoto) => {
        this.setState({
            profilePhoto: newPhoto
        })
    }

    handleProfileSubmit = () => {
        const values = {
            headline: this.state.headline,
            short_bio: this.state.short_bio,
            keywords: this.state.keywords.map((keyword) => {
                return {
                    keyword: keyword.value
                }
            }),
            sectors: this.state.sectors.map((sector) => {
                return {
                    sector: sector.value
                }
            }),
            work_history: [
                {
                    job_title: this.state.job_title,
                    country_work: this.state.country_work,
                    city_work: this.state.city_work,
                    role: this.state.role,
                    start_date: this.state.start_date,
                    end_date: this.state.end_date
                }
            ],
            skills: this.state.skills.map((skill) => {
                return {
                    skill: skill.value
                }
            }),
            timezone: this.state.timezone,
            country: this.state.country,
            city: this.state.city,
            skype_number: this.state.skype_number,
            rate_per_hour: this.state.rate_per_hour,
            is_long_term: this.state.is_long_term,
            is_pro_bono: this.state.is_pro_bono
        };
        getCurrentUser().then(({data}) => {
            // console.log({data})
            Axios.put(`${EXPERT_UPDATE_URL}${data.expert_id}/`,{
                profile: values
            },{
                "content-type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken")
            }).then(({data}) => {
                alert("Worked 2!");
            }).catch(() => { alert("Error 2")});
        }).catch(() => {alert("Error 1")});
    }

    render() {
        return (
            <ProfileContext.Provider value={{
                ...this.state, 
                handleProfileChange: this.handleProfileChange, 
                handleLanguageChange: this.handleLanguageChange,
                handleKeywordsChange: this.handleKeywordsChange,
                handleSectorsChange: this.handleSectorsChange,
                handleSkillsChange: this.handleSkillsChange,
                handleChangeStartDate: this.handleChangeStartDate,
                handleChangeEndDate: this.handleChangeEndDate,
                handlePhotoChange: this.handlePhotoChange,
                handleProfileSubmit: this.handleProfileSubmit
            }
                }>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}

export default ProfileContext;