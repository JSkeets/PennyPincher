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
    <div>
      <li className="comment-index-item">
        {comment.body}
        <br />
        {/* -{tweet.user.name}&nbsp;{computedTime(timeOf)}H&nbsp;ago */}
        <br />
      </li>
    </div>
  );
};

export default CommentIndexItem;
