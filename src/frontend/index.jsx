import React from 'react';
import ReactDOM from 'react-dom';
import injectGlobal from './assets/themes/global';

const mountPoint = document.getElementById('root');

ReactDOM.render(<h1>Hello world!</h1>, mountPoint);
injectGlobal();

module.hot.accept();
