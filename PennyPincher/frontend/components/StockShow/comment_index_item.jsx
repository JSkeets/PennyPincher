import React from "react";
import { Link } from "react-router-dom";

const CommentIndexItem = ({ comment }) => {
  let computedTime = function(time) {
    let parsed = Date.parse(time);
    let now = Date.now();
    return Math.round((parsed / (1000 * 60 * 60)) % 24);
  };
  let timeOf = comment.created_at;
  return (
    <li className="comment-index-item">
      {comment.body}
      <br />
      {/* -{tweet.user.name}&nbsp;{computedTime(timeOf)}H&nbsp;ago */}
      <br />
    </li>
  );
};

export default CommentIndexItem;
//   <li className="news-index-item">
//       <a href={`${news.url}`}>{news.headline}</a>&nbsp;&nbsp;
//       {news.datetime.slice(0, 10)}&nbsp;&nbsp;
//       {news.source}&nbsp;
//     </li>
