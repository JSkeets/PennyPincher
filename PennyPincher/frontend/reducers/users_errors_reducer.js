import { RECEIVE_USER_ERRORS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};
