import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AppComp from './App';
import AppComp from './App.jsx';
//import Product from './casestudy.jsx'
//import Timer from './Components/timer.jsx';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Timer />, document.getElementById('root'));

ReactDOM.render(<AppComp>
    <li> List element </li>
    <h4> Heading element </h4>
    <p> Paragraph element </p>
    <span> Span element </span>
</AppComp>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
