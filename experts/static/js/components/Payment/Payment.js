import React from "react";
import "./Payment.scss";
import PaymentTable from "./PaymentTable";

class Payment extends React.Component {

    render() {
        console.log("Payment")
        return (
            <div className="Payment fullWidth">
                <p className="heading-text">Payment</p>
                <p className="text-muted">Below is a history of your payment transactions</p>
                <div className="payment-table mr-2 mt-2">
                    <PaymentTable/>
                </div>
            </div>
        )
    }
}

export default Payment;