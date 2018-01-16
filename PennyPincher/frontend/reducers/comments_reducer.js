import { RECEIVE_COMMENTS } from "../actions/comment_actions";
import merge from "lodash/merge";

let CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_COMMENTS:
      let newObj = {};
      return merge(newObj, state, {
        [action.ticker]: action.comments
      });
    default:
      return state;
  }
};

export default CommentsReducer;
