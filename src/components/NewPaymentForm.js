import React, {Component} from "react";
import {Button, Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

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
        const name = event.target.id;

        this.setState({
            [name]: event.target.value
        });
    }

    render() {

        return <form onSubmit={this.handleSubmit}>

            <FormGroup controlId="paymentName" style={{pb:20}}>
                <Col componentClass={ControlLabel} sm={2}>
                    Payment Name
                </Col>
                <Col sm={10}>
                    <FormControl type="text" value={this.state.paymentName} placeholder="Enter text"
                                 onChange={this.inputChange}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="amount" style={{paddingTop:"30px"}}>

                <Col componentClass={ControlLabel} sm={2}>
                    Amount
                </Col>
                <Col sm={10}>
                    <FormControl type="text" value={this.state.amount} placeholder="Enter text"
                                 onChange={this.inputChange}/>
                </Col>

            </FormGroup>

            <FormGroup controlId="date">
                <Col componentClass={ControlLabel} sm={2}>
                    Date
                </Col>
                <Col sm={10}>
                    <FormControl type="text" value={this.state.date} placeholder="Enter text"
                                 onChange={this.inputChange}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit">Add</Button>
                </Col>
            </FormGroup>

        </form>
    }

}

export default NewPaymentForm;