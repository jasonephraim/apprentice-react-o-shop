import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducers';
import regiserReducer from './register/reducers';
import productReducer from './products/reducers';

const store = createStore(
  combineReducers(
    {
      login: loginReducer,
      regiser: regiserReducer,
      prododucts: productReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
