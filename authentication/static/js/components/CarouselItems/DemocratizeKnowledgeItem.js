import React, { Component } from 'react';
import "./DemocratizeKnowledgeItem.scss";
import HeadingText from "../../../../../experts/static/js/components/HeadingText/HeadingText";


export default class DemocratizeKnowledgeItem extends Component {
    render() {
        return (
            <div className="DemocratizeKnowledgeItem">
                <div className="row">
                    <div className="col m6 s12">
                        <div className="text-container">
                        <HeadingText>
                        Our goal is to democratize knowledge and information
                        </HeadingText>
                        <p className="text-muted">
                            By creating an environment that encourages
                            <br/> knowledge flow,
                            diversity, sharing and flexibility.
                        </p>
                       
                        <div className="mt-5">
                            <a className="btn btn-signUp">Join our team.</a>
                        </div>
                        </div>
                    </div>
                    <div className="col m6 s12 person-image">
                        
                    </div>
            </div>
            </div>
        )
    }
}
