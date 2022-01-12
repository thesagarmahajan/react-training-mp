import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFirstComponent from './MyFirstComponent';
import CreateElement from './CreateElement';
import CreateElementTableExample from './CreateElementTableExample';
import BoostrapWithClassComponent from './BootstrapWithClassComponent';

ReactDOM.render(
  <React.StrictMode>
    <BoostrapWithClassComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
