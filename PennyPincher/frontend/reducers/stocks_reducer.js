import { RECEIVE_STOCK, RECEIVE_ALL_STOCKS,RECEIVE_TWEETS } from "../actions/stock_actions";
import merge from "lodash/merge";

let StocksReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = {};
	switch (action.type) {
		case RECEIVE_STOCK:
			return merge({}, state, { [action.stock.quote.symbol]: action.stock });
		case RECEIVE_ALL_STOCKS:
			return merge({}, state, action.stocks);
		case RECEIVE_TWEETS:
			return merge({}, state,{ [action.hashtag]: action.res});
		default:
			return state;
	}
};

export default StocksReducer;
