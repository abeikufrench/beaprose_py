import React from "react";
import "./ExpertCardList.scss";
import ExpertCard from "../ExpertCard/ExpertCard";
import ViewStyleContext from "../../contexts/ViewStyleContext";

class ExpertCardList extends React.Component {
    static contextType = ViewStyleContext;
    render() {
        const { isGridView } = this.context;
        const { experts } = this.props;
        if(isGridView) return (
            <div className="ExpertCardList">
                {experts.map((expert) => (
                    <div className="col m4 s12">
                        <ExpertCard expert={expert}/>
                    </div>
                ))}
            </div>
        )
        else return (
            <div className="ExpertCardList">
                {experts.map((expert) => (
                    <div className="col m12 s12">
                        <ExpertCard expert={expert}/>
                    </div>
                ))}
            </div>
        )
    }
}

ExpertCardList.defaultProps = {
    experts: []
}

export default ExpertCardList;