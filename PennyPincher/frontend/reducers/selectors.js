import values from "lodash/values";
export const selectAllStocks = state => {
	let stocks = values(state.entities.stocks);
	let filtered = [];
	console.log(Date.now());
	stocks.forEach(stock => {
		if (stock.askPrice < 5) {
			filtered.push(stock);
		}
	});
	return filtered;
};
