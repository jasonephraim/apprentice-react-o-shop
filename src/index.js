import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceworker';
import createBrowserHistory from './utils/history';

ReactDOM.render(
  <Router history={createBrowserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
