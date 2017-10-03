import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { fetchAllStocks } from "./util/stock_api_util";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});
