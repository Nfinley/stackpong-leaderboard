import { Constants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          // Handle the routing in the component itself instead of using the history object here
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: Constants.LOGIN_REQUEST, user } }
  function success(user) { return { type: Constants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: Constants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: Constants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: Constants.REGISTER_REQUEST, user } }
  function success(user) { return { type: Constants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: Constants.REGISTER_FAILURE, error } }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() { return { type: Constants.GETALL_REQUEST } }
  function success(users) { return { type: Constants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: Constants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        user => {
          dispatch(success(id));
        },
        error => {
          dispatch(failure(id, error));
        }
      );
  };

  function request(id) { return { type: Constants.DELETE_REQUEST, id } }
  function success(id) { return { type: Constants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: Constants.DELETE_FAILURE, id, error } }
}
