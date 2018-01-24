export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";

import * as CommentsUtil from "../util/comments_util";

const receiveComments = (comments, ticker) => {
  return { type: RECEIVE_COMMENTS, comments, ticker: ticker };
};

const addComment = comment => {
  return { type: ADD_COMMENT, comment };
};
export const fetchComments = ticker => dispatch =>
  CommentsUtil.fetchComments(ticker).then(res =>
    dispatch(receiveComments(res, ticker))
  );

export const createComment = (comment, ticker) => dispatch =>
  CommentsUtil.createComment(comment).then(res => dispatch(addComment(res)));
