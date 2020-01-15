import React, { Component } from 'react';
import "./Result.scss";

export default class Result extends Component {
    render() {
        const { result } = this.props;
        console.log(result.user.profile_photo)
        return (
            <div className="text-center Result">
                <img className="profile-photo mt-3 mx-1" src={`/media/${result.user.profile_photo}`}/>
                <div className="ml-2">
                    <span>{result.user.email}</span>
                </div>
            </div>
        )
    }
}
