import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './styles/styles.scss';
import App from './App';
import createBrowserHistory from './utils/history';
import * as serviceWorker from './serviceworker';

ReactDOM.render(
  <Router history={createBrowserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);

/* serviceWorker.unregister(); <-- not working*/
