export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

import * as CommentsUtil from "../util/comments_util";

const receiveComments = (comments, ticker) => {
  return { type: RECEIVE_COMMENTS, comments, ticker: ticker };
};

export const fetchComments = ticker => dispatch =>
  CommentsUtil.fetchComments(ticker).then(res =>
    dispatch(receiveComments(res, ticker))
  );
