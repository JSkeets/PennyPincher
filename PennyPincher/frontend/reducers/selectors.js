import values from "lodash/values";
import merge from "lodash/merge";
import { fetchStock } from "../actions/stock_actions";

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

// export const fetchPercent = (stat) => {(
// 	$.ajax({
// 		method: "GET",
// 		url: `https://api.iextrading.com/1.0/stock/${stock.symbol}/batch?types=quote,stats,news,peers,chart&range=6m&last=50`
// 	}).then(res => {
// 		quotes = merge(quotes, {
// 			[res.quote.symbol]: res.quote.changePercent * 100
// 		});
// 	})
//
// )};

export const stockInfo = state => {
	let filtered = selectAllStocks(state);
	let quotes = {};
	let stockSymb = [];
	filtered.forEach(stock => {
		stockSymb.push(stock.symbol);
	});
	let stockString = stockSymb.join(",");
	if (stockString.length > 0)  {
					let x = $.ajax({
						method: "GET",
						url: `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockString}&types=quote,stats,news,peers,chart&range=6m&last=50`
					}).then(res => {
						console.log(res);
								quotes = merge(quotes, {
								 res
							});
					});
	}
	if ( quotes === {}) {
		let loading = true;
		return loading;
	} else {
	return quotes;
	}
};

export const watchlistStocks = stocks=> {
  let quotes = {};
  stocks.forEach(
    stock => {
      let x = $.ajax({
        method: "GET",
        url: `https://api.iextrading.com/1.0/stock/${
          stock
        }/batch?types=quote,stats,news,peers,chart&range=6m&last=50`
      }).then(res => {
        quotes = merge(quotes, { [res.quote.symbol]: res });
      });
    }
  );
  return quotes;
};

