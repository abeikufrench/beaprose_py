import React, { Component } from 'react';
import Chart from "./Chart";
import "./GraphSection.scss";

export default class GraphSection extends Component {
    render() {
        return (
            <div className="GraphSection mt-3">
                <Chart/>
            </div>
        )
    }
}
