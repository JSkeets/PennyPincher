import {
  RECEIVE_TWEETS
} from "../actions/stock_actions";
import merge from "lodash/merge";

let TweetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TWEETS:
      return merge({}, state, { [action.hashtag]: action.res });
    default:
      return state;
  }
};

export default TweetsReducer;
