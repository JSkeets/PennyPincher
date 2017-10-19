import React from "react";
import { Link } from "react-router-dom";

const StockIndexItem = ({ stock, percents }) => {
	if (!percents || !stock) {
		return null;
	} else {
		return (
			<li className="review-index-item">
				<div className="stock-listing">
					<Link id="stock-symbol" to={`stocks/${stock.symbol}`}>
						{stock.symbol}
					</Link>&nbsp;
					<i id="stock-price">{stock.lastSalePrice}</i>&nbsp;
					<i id="stock-volume">{stock.volume}</i>&nbsp;
					<i id="stock-sector">{stock.sector}</i>&nbsp;
					<i id="stock-price" style={percents[stock.symbol] > 0 ? {color: "green"} : {color: "red"}}>{percents[stock.symbol].toFixed(2)}</i>&nbsp;
				</div>
			</li>
		);
	}
};

export default StockIndexItem;
