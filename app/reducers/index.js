// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  authentication,
  registration,
  users,
  alert,
  router,
});

export default rootReducer;
