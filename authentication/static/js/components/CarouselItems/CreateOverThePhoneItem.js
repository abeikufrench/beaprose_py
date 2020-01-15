import React, { Component } from 'react';
import HeadingText from "../../../../../experts/static/js/components/HeadingText/HeadingText";
import "./CreateOverThePhoneItem.scss";

export default class CreateOverThePhoneItem extends Component {
    render() {
        return (
            <div className="CreateOverThePhoneItem">
                 <div className="row">
                    <div className="col m6 s12">
                        <div className="text-container">
                        <HeadingText>
                        create value by helping people over the phone 
                        </HeadingText>
                        <p className="text-muted">
                        Help people by leveraging on your explicit and <br/>experiential knowledge
                        </p>
                       
                        <div className="mt-5">
                            <a className="btn btn-signUp">/Sign Up as an Influencer.</a>
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
