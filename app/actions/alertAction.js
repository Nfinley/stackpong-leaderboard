import { Constants } from '../constants';

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: Constants.SUCCESS, message };
}

function error(message) {
  return { type: Constants.ERROR, message };
}

function clear() {
  return { type: Constants.CLEAR };
}
