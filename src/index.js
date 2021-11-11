import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topnav from './components/Topnav';
import Contentbox from './components/Contentbox'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Topnav />
    <Contentbox />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
