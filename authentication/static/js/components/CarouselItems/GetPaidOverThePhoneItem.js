import React, { Component } from 'react';
import "./GetPaidOverThePhoneItem.scss";
import HeadingText from "../../../../../experts/static/js/components/HeadingText/HeadingText";


export default class GetPaidOverThePhoneItem extends Component {
    render() {
        return (
            <div className="GetPaidOverThePhoneItem">
                <div className="row">
                    <div className="col m6 s12">
                        <div className="text-container">
                        <HeadingText>
                            Get paid for helping people over the phone
                        </HeadingText>
                       
                        <div className="mt-5">
                            <a className="btn btn-signUp">Sign up now</a>
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
