import React, { Component } from 'react';
import "./GetExpertAdviceItem.scss";
import HeadingText from "../../../../../experts/static/js/components/HeadingText/HeadingText";

export default class GetExpertAdviceItem extends Component {
    render() {
        return (
            <div className="GetExpertAdviceItem">
                <div className="row">
                    <div className="col m6 s12">
                        <div className="text-container">
                        <HeadingText>
                            Get advice <span className="mini-heading-text">from</span><br/> world class experts
                        </HeadingText>
                        <p className="text-muted mt-3">
                            Get immediate help from our top talented experts.
                            <br/>Any time. Any matter.
                        </p>
                        <div className="mt-5">
                            <a href="" className="btn btn-signUp">Find an expert</a>
                            <a href="/expert/register/" className="btn btn-tertiary text-white ml-2">Become an expert</a>
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
