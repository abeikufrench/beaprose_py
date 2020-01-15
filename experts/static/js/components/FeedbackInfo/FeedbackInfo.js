import React from "react";
import "./FeedbackInfo.scss";
import SubHeading from "../SubHeading/SubHeading";
import FeedbackCardList from "../FeedbackCardList/FeedbackCardList";


class FeedbackInfo extends React.Component {

    render() {
        const { feedbacks } = this.props;
        return (
            <div className="FeedbackInfo">
                <SubHeading text="Feedback"/>
                <FeedbackCardList feedbacks={feedbacks}/>
            </div>
        )
    }
}

export default FeedbackInfo;