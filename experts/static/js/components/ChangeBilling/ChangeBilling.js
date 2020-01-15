import React from "react";
import "./ChangeBilling.scss";
import BillingForm from "./BillingForm";
import FloatingButton from "../FloatingButton/FloatingButton";

class ChangeBilling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [<BillingForm className="mx-3 mb-2"/>]
        }
    }

    handleAddCard = () => {
        this.setState({
            cards: [...this.state.cards, <BillingForm className="ml-3"/>]
        })
    }

    render() {
        console.log("Hello")
        return (
            <div className="ChangeBilling">
                <p className="heading-text">Billing</p>
                <p className="text-muted mb-3">This card will be charged for calls</p>
                <div className="card-containers">
                {this.state.cards}
                </div>
                <div className="my-3">
                    <FloatingButton color="#FFCB21" icon="add" onClick={this.handleAddCard}/>
                </div>
                <button className="btn-save">
                    Save
                </button>
            </div>
        )
    }
}

export default ChangeBilling;