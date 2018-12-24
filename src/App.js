import React, {Component} from 'react';

import './App.css'

import Payments from './components/Payment'
import Pages from './components/Pages'
import NewPaymentForm from "./components/NewPaymentForm";

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
                console.log(data.payments);
                const userName = data.name + " " + data.lastName;
                return data.payments.map(item => ({...item, user: userName}));
            })
            .then((payments => this.setState((state) => ({...state, data: payments}))));
    }

    render() {

        const {pageSize, currentlySelected, data} = {...this.state};

        console.log(data);

        const pages = Math.ceil(this.state.data.length / this.state.pageSize);
        const pagedData = data.slice(pageSize * (currentlySelected - 1), (currentlySelected * pageSize));

        return <div>
            <div>
                <Payments items={pagedData}/>
            </div>
            <Pages selectionChange={this.selection} pages={pages} currentlySelected={currentlySelected}/>
            <div>
                Total size {data.length}
            </div>
            <div>
                <NewPaymentForm addPayment={this.addPayment}/>
            </div>
        </div>;
    }

}

export default App;
