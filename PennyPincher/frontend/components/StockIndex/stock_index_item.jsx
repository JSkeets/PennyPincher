import React from "react";
import { Link } from "react-router-dom";

const StockIndexItem = ({ stock }) => {
	if (!stock) {
		return null;
	}

	return (
		<li className="review-index-item">
			<div className="stock-listing">
				<Link id="stock-symbol" to={`stocks/${stock.symbol}`}>
					{stock.symbol}
				</Link>&nbsp;
				{stock.lastSalePrice}&nbsp;
				{stock.volume}&nbsp;
				{stock.sector}
			</div>
		</li>
	);
};

export default StockIndexItem;
