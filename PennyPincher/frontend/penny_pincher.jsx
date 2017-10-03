import React from "react";
import ReactDOM from "react-dom";
import { fetchAllStocks } from "./util/stock_api_util";
document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<h1>HEroku teSTING</h1>, root);
	fetchAllStocks();
});
