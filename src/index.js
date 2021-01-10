import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';
import App from './App';
import { configureFakeBackend } from './utils/fakeBackend';
import history from './utils/history';
import store from './store/store';

configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
