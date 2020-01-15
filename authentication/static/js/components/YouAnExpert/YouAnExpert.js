import React, { Component } from 'react';
import './YouAnExpert.scss';

export default class YouAnExpert extends Component {
    render() {
        return (
            <div className="YouAnExpert">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <h2 className="heading-text">Are you an expert?</h2>
                            <p className="text-muted">
                                Join a community of passionate 
                                experts and thought-leaders who are being sought out by fellow entrepreneurs.
                            </p>
                            <a href="/expert/register/" className="btn btn-signUp mt-5">Become an expert</a>
                        </div>
                        <div className="col m6 s12 list">
                            <ul>
                                <li>
                                    Take your traditional business online
                                </li>
                                <li>
                                    Access customers all over the world
                                </li>
                                <li>
                                    Reclaim the value of your time
                                </li>
                                <li>
                                    Set your own hourly rate
                                </li>
                                <li>
                                    Work when, where and with whomever you want
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
