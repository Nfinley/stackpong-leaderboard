/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import {Switch, Route} from 'react-router';
import App from './containers/App';
// import Home from './containers/HomePage';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import RegisterPage from './components/RegisterPage';

export default () => (
  <App>
    <Switch>
      <PrivateRoute exact path="/" component={HomePage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/counter" component={CounterPage}/>
      {/*<Route path="/" component={Home} />*/}
    </Switch>
  </App>
);
