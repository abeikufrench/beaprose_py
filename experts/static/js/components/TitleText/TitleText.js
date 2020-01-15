import React, { Component } from 'react'

export default class TitleText extends Component {
    render() {
        return (
            <p className={`title-text ${this.props.className}`}>
                {this.props.children}
            </p>
        )
    }
}
