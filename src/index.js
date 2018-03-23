import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

if(typeof window !=="undefined")
  window.React = React;

ReactDOM.render(<App everyone="chester bennington"/>, document.getElementById('root'));
