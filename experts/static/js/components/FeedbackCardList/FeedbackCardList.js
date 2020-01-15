import React from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

class FeedbackCardList extends React.Component {

    render() {
        const { feedbacks } = this.props;
        return (
            <div className="FeedbackCardList" {...this.props}>
                {feedbacks.map((feedback) => (
                    <FeedbackCard feedback={feedback}/>
                ))}
            </div>
        )
    }
}

FeedbackCardList.defaultProps = {
    feedbacks: []
}

export default FeedbackCardList;