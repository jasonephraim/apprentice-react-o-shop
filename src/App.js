import React from 'react';
import { Route, Switch } from 'react-router';

import home from './pages/Home';
import login from './pages/Login';
import register from './pages/Register';
import PrivateRoute from './components/shared/privateRoute';
import routePaths from './constants/routePaths';

function App() {
  return (
    <div className="App">    
        <Switch>
          <Route path={routePaths.login} component={login} />
          <Route path={routePaths.register} component={register} />
          <PrivateRoute path={routePaths.home} component={home} />
        </Switch>
    </div>
  );
}

export default App;
