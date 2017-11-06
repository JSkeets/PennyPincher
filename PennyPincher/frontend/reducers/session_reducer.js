import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
        return action.errors;
    default:
      return state;
  }
};

export default SessionReducer;
