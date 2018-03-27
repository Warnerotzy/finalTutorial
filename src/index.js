import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lienzo from './Lienzo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lienzo />, document.getElementById('root'));
registerServiceWorker();
