import { RECEIVE_STOCK } from "../actions/stock_actions";
import merge from "lodash/merge";

let StocksReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = {};
	switch (action.type) {
		case RECEIVE_STOCK:
			return merge({}, state, { [action.stock.quote.symbol]: action.stock });
		default:
			return state;
	}
};

export default StocksReducer;
