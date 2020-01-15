import React, { Component, createContext } from "react";

const ViewStyleContext = createContext();

export class ViewStyleProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {isGridView: true}
        this.toGridView = this.toGridView.bind(this);
        this.toListView = this.toListView.bind(this);
    }

    toGridView() {
        this.setState({
            isGridView: true
        })
    }

    toListView() {
        this.setState({
            isGridView: false
        })
    }

    render() {
        return (
            <ViewStyleContext.Provider value={{...this.state, toGridView: this.toGridView, toListView: this.toListView}}>
            {this.props.children}
            </ViewStyleContext.Provider>
        )
    }
}

export default ViewStyleContext;