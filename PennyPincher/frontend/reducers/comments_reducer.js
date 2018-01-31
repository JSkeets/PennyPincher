import { RECEIVE_COMMENTS, ADD_COMMENT } from "../actions/comment_actions";
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
    case ADD_COMMENT:
      newObj = {};

      return merge(newObj, state, { [action.comment.ticker]: action.comment });

    default:
      return state;
  }
};

export default CommentsReducer;
