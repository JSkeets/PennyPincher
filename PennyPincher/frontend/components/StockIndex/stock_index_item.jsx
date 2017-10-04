import React from "react";
import { Link } from "react-router-dom";

const StockIndexItem = ({ stock }) => {
	if (!stock) {
		return null;
	}

	return (
		<li className="review-index-item">
			<div className="stock-listing">
				{stock.symbol}&nbsp;
				{stock.askPrice}&nbsp;
				{stock.volume}&nbsp;
				{stock.sector}
			</div>
		</li>
	);
};

export default StockIndexItem;
