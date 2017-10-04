import values from "lodash/values";
export const selectAllStocks = state => {
	let stocks = values(state.entities.stocks);
	let filtered = [];
	console.log(Date.now());
	stocks.forEach(stock => {
		if (stock.lastSalePrice < 5 && stock.volume > 10000) {
			filtered.push(stock);
		}
	});
	return filtered;
};
