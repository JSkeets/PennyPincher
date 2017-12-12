import { combineReducers } from "redux";
import StocksReducer from "./stocks_reducer";
import TweetsReducer from "./tweets_reducer";
import WatchlistReducer from "./watchlist_reducer";

const EntitiesReducer = combineReducers({
	stocks: StocksReducer,
	tweets: TweetsReducer,
	watchlist: WatchlistReducer
});

export default EntitiesReducer;
