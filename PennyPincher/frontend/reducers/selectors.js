import values from "lodash/values";
export const selectAllStocks = state => {
	let stocks = values(state.entities.stocks);
	let filtered = [];
	let today = new Date();
	let time = [today.getUTCHours(), today.getMinutes()];

	stocks.forEach(stock => {
		if (time[0] < 15 && stock.volume > 10000 && stock.lastSalePrice < 5) {
			filtered.push(stock);
		} else if (
			time[0] === 15 &&
			stock.volume > 50000 &&
			stock.lastSalePrice < 5
		) {
			filtered.push(stock);
		} else if (
			time[0] >= 16 &&
			stock.volume > 100000 &&
			stock.lastSalePrice < 5
		) {
			filtered.push(stock);
		}
	});
	return filtered;
};
