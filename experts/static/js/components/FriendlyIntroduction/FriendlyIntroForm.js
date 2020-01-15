import React, { Component } from 'react';
import "./FriendlyIntroForm.scss";
import ProfileContext from "../../contexts/ProfileContext";
import Creatable from "react-select/creatable";

export default class FriendlyIntroForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            keywords: []
        }
    }

    render() {
        const { headline, short_bio, sectors, keywords, handleProfileChange, handleKeywordsChange, handleSectorsChange } = this.context;
        return (
            <form className="FriendlyIntroForm">
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <input value={headline} onChange={handleProfileChange} id="headline" type="text" name="headline"/>
                            <label htmlFor="headline">Headline</label>
                        </div>
                        <div className="input-field">
                            <textarea value={short_bio} onChange={handleProfileChange} name="short_bio" id="bio" className="materialize-textarea"></textarea>
                            <label htmlFor="bio">Short bio</label>
                        </div>
                    <Creatable
                        isMulti
                        value={sectors}
                        className="select-field"
                        classNamePrefix="select"
                        placeholder="Sectors of Industry"
                        onChange={handleSectorsChange}
                        options={this.state.options}
                    />
                    <Creatable
                        isMulti
                        value={keywords}
                        className="select-field mt-3"
                        classNamePrefix="select"
                        placeholder="Keywords"
                        onChange={handleKeywordsChange}
                        options={this.state.keywords}
                    />
                    </div>
                </div>
            </form>
        )
    }
}

FriendlyIntroForm.contextType = ProfileContext;
