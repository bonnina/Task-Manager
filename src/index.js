import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import WebFont from 'webfontloader';

const store = createStore(
  reducer, 
  applyMiddleware(thunk, logger)
);

const app = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root'));
  };

// postpone initiation of app until font is active
const webFontConfig = {
  google: {
      families: ['Fredoka One'],
  },
  classes: false,
  timeout: 1000,
  active: app, 
};

WebFont.load(webFontConfig);

serviceWorker.unregister();
