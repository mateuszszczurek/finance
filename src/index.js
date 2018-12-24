import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';
import data from './components/payments';

import * as serviceWorker from './serviceWorker';


var dataProvider;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    dataProvider = () => new Promise((resolve, reject) => resolve(data));
} else {
    dataProvider = () => fetch('http://localhost:8080/api/payments/user/1')
        .then(response => response.json())
}

ReactDOM.render(<App dataProvider={dataProvider}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
