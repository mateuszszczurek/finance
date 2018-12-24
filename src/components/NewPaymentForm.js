import React, {Component} from "react";

class NewPaymentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paymentName: '',
            amount: '',
            date: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addPayment(this.state);
    }

    inputChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit} onChange={this.inputChange}>
            Payment name:<br/>
            <input type='text' name='paymentName' onChange={this.inputChange} value={this.state.paymentName}/><br/>
            Amount:<br/>
            <input type='text' name='amount' onChange={this.inputChange} value={this.state.amount}/><br/>
            Date:<br/>
            <input type='text' name='date' onChange={this.inputChange} value={this.state.date}/><br/>
            <input type='submit' value="Submit"/>
        </form>
    }

}

export default NewPaymentForm;