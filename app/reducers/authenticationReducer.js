import { Constants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case Constants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case Constants.LOGIN_FAILURE:
      return {};
    case Constants.LOGOUT:
      return {};
    default:
      return state
  }
}
