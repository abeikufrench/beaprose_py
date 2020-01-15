import React from "react";
import "./PaymentTable.scss";

class PaymentTable extends React.Component {

    render() {
        return (
            <table className={`PaymentTable ${this.props.className}`}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Recipient</th>
                        <th>Description</th>
                        <th>Call Duration</th>
                        <th>Card</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>12/04/2018</td>
                            <td>Cody Murphy</td>
                            <td>Thanks for the answers to all my questions</td>
                            <td>5 min</td>
                            <td>**** **** **** 2374</td>
                            <td>$158</td>
                        </tr>
                        <tr>
                            <td>12/04/2018</td>
                            <td>Cody Murphy</td>
                            <td>Thanks for the answers to all my questions</td>
                            <td>5 min</td>
                            <td>**** **** **** 2374</td>
                            <td>$158</td>
                        </tr>
                        <tr>
                            <td>12/04/2018</td>
                            <td>Cody Murphy</td>
                            <td>Thanks for the answers to all my questions</td>
                            <td>5 min</td>
                            <td>**** **** **** 2374</td>
                            <td>$158</td>
                        </tr>
                    </tbody>
            </table>
        )
    }
}

export default PaymentTable;