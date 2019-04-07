import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import 'tachyons';
import App from './App';
import Routes from './components/navigation/Routes.jsx';
import AutoComplete from './components/utilities/AutoComplete.jsx';


ReactDOM.render(<AutoComplete />, document.getElementById('root'));
