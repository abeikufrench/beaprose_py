import React, { Component } from 'react';
import Item from "./Item";
import "./WhyBeaprose.scss";

export default class WhyBeaprose extends Component {
    render() {
        return (
            <div className="WhyBeaprose my-5">
                <div className="row">
                    <div className="col m3 s12">
                        <Item image="/static/images/speed.png" title="Speed">
                        <p className="text-muted text-center">
                         Get <b>instant help</b> in 30 seconds and Response in 8 minutes 
                        </p>
                        </Item>
                    </div>
                    <div className="col m3 s12">
                        <Item image="/static/images/flexibility.png" title="Flexibility">
                        <p className="text-muted text-center">
                            <b>Choose</b> an expert that fits your needs
                        </p>
                        </Item>
                    </div>
                    <div className="col m3 s12">
                        <Item image="/static/images/trust.png" title="Trust">
                            <p className="text-muted text-center">
                            Our experts are throughly <b>vetted</b> and have immense <b>knowledge and experience</b>
                            </p>
                        </Item>
                    </div>
                    <div className="col m3 s12">
                        <Item image="/static/images/affordable.png" title="Affordable">
                            <p className="text-muted text-center">Get advise and save <b>time and money</b></p>
                        </Item>
                    </div>
                </div>
            </div>
        )
    }
}
