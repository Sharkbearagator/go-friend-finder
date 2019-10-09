import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './bootstrapElements/Navbar';
import Tron from './bootstrapElements/Jumbotron';

ReactDOM.render(<Navigator />, document.getElementById('nav'));
ReactDOM.render(<Tron />, document.getElementById('tron'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
