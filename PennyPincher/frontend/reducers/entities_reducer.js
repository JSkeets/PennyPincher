import { combineReducers } from "redux";
import StocksReducer from "./stocks_reducer";
import TweetsReducer from "./tweets_reducer";

const EntitiesReducer = combineReducers({
	stocks: StocksReducer,
	tweets: TweetsReducer
});

export default EntitiesReducer;
