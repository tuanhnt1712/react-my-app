import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './css/style.css';
import App from './App';
import StorePicker from './StorePicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StorePicker />, document.getElementById('root'));
registerServiceWorker();
