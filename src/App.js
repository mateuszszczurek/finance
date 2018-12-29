import React, {Component} from 'react';

import './App.css'

import Payments from './components/Payment'
import Pages from './components/Pages'
import NewPaymentForm from "./components/NewPaymentForm";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Col, Grid, Row} from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentlySelected: 1,
            pageSize: 20,
            data: []
        };
        this.selection = this.selection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addPayment = this.addPayment.bind(this);
    }

    handleChange(e) {

    }

    addPayment(payment) {
        const data = [...this.state.data, payment];
        this.setState((state) => ({...state, data}));
    }

    selection(e) {
        e.preventDefault();
        this.setState({...this.state, currentlySelected: parseInt(e.currentTarget.innerText)});
    };

    componentDidMount() {
        this.props.dataProvider()
            .then(data => {
                const userName = data.name + " " + data.lastName;
                return data.payments.map(item => ({...item, user: userName}));
            })
            .then((payments => this.setState((state) => ({...state, data: payments}))));
    }

    render() {

        const {pageSize, currentlySelected, data} = {...this.state};

        const pages = Math.ceil(this.state.data.length / this.state.pageSize);
        const pagedData = data.slice(pageSize * (currentlySelected - 1), (currentlySelected * pageSize));

        return <div>
            <Grid>
                <Row style={{height:"600px"}}>
                    <Col xs={12}>
                        <Payments items={pagedData}/>
                    </Col>
                </Row>
            </Grid>
            <Pages selectionChange={this.selection} pages={pages} currentlySelected={currentlySelected}/>
            Total size {data.length}
            <NewPaymentForm addPayment={this.addPayment}/>
        </div>
    }


}

export default App;
