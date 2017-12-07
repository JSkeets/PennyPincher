import React from "react";
import { Link } from "react-router-dom";

const TweetIndexItem = ({ tweet }) => {

  let computedTime = function(time){
    let parsed = Date.parse(time);
    let now = Date.now();
    return (
     Math.round( (parsed/(1000*60*60))%24)
    );
  };
  let timeOf = tweet.created_at;
  return (
  <li className="tweet-index-item">
      {tweet.full_text}<br/>
      -{tweet.user.name}&nbsp;{computedTime(timeOf)}H&nbsp;ago
      <br/>
    </li>
  );
};

export default TweetIndexItem;
//   <li className="news-index-item">
//       <a href={`${news.url}`}>{news.headline}</a>&nbsp;&nbsp;
//       {news.datetime.slice(0, 10)}&nbsp;&nbsp;
//       {news.source}&nbsp;
//     </li>