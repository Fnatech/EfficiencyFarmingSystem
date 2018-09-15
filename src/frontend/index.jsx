import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import injectGlobal from './assets/themes/global';
import App from './pages/App';
import CropStore from './store/CropStore';

const mountPoint = document.getElementById('root');

const store = new CropStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>
  , mountPoint);
injectGlobal();

module.hot.accept();
