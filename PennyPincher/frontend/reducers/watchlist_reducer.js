import { RECEIVE_WATCHLIST } from "../actions/watchlist_actions";
import merge from "lodash/merge";

let WatchlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return merge({}, state, { [action.watchlist.user_id]: action.watchlist.stock_symbols });
    default:
      return state;
  }
};

export default WatchlistReducer;
