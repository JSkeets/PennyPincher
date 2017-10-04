import React from "react";
import { Link } from "react-router-dom";

const ReviewIndexItem = ({ news }) => {
	return (
		<li className="news-index-item">
			<a href={`${news.url}`}>{news.headline}</a>&nbsp;&nbsp;
			{news.datetime.slice(0, 10)}&nbsp;&nbsp;
			{news.source}&nbsp;
		</li>
	);
};

export default ReviewIndexItem;
