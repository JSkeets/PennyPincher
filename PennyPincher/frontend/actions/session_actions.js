import * as SessionUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveUserErrors = errors => {
  return{
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const login = user => dispatch =>
  SessionUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  SessionUtil.logout().then(user => dispatch(receiveCurrentUser(null)));

export const createUser = user => dispatch =>
  SessionUtil.createUser(user).then(
    res => (dispatch(receiveCurrentUser(res))),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const resetEmail = user => dispatch =>
  SessionUtil.resetEmail(user).then(
    res => console.log(res)
  );

export const resetPassword = user => dispatch =>
  SessionUtil.resetPassword(user).then(
    res => console.log(res)
  );
