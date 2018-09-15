import React from 'react';
import ReactDOM from 'react-dom';
import injectGlobal from './assets/themes/global';
import App from './pages/App';

const mountPoint = document.getElementById('root');

ReactDOM.render(<App />, mountPoint);
injectGlobal();

module.hot.accept();
