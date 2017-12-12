export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";


import * as WatchlistUtil from "../util/watchlist_api_util";


const receiveWatchlist = watchlist => {
  return { type: RECEIVE_WATCHLIST, watchlist };
};


export const fetchWatchlist= watchlist => dispatch =>
  WatchlistUtil.fetchWatchlist(watchlist).then(res => dispatch(receiveWatchlist(res)));


export const updateWatchlist = ticker => dispatch =>
 WatchlistUtil.updateWatchlist(ticker).then(res => dispatch(receiveWatchlist(res)));

