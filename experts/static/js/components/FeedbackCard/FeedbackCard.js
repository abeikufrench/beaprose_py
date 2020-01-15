import React from "react";
import "./FeedbackCard.scss";

class FeedbackCard extends React.Component {

    render() {
        const { feedback } = this.props
        return (
            <div className="FeedbackCard" {...this.props}>
                <div className="col m3 person-image">
                    <img src={feedback.personImage} alt={feedback.personName}/>
                </div>
                <div className="col m9">
                    <p className="person-name mb-1">{feedback.personName}</p>
                    <p className="text-muted">
                    {feedback.feedback}
                    </p>
                </div>
            </div>
        )
    }
}


FeedbackCard.defaultProps = {
    feedback: {}
}

export default FeedbackCard;