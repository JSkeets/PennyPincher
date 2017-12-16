import { connect } from "react-redux";
import Watchlist from "./watchlist";
import { fetchAllStocks, fetchStock } from "../../actions/stock_actions";
import { selectAllStocks, stockInfo, watchlistStocks } from "../../reducers/selectors";
import { fetchWatchlist,updateWatchlist,deleteWatchlist} from "../../actions/watchlist_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    user: state.session.currentUser.id,
    watchlistId: state.entities.watchlist.watchlistId,
    watchlist: state.entities.watchlist[state.session.currentUser.id]
  };
};

const mapDispatchToProps = dispatch => ({
  watchlistStocks: (state) => watchlistStocks(state),
  fetchAllStocks: () => dispatch(fetchAllStocks()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  processForm: (ticker) => dispatch(updateWatchlist(ticker)),
  deleteWatchlist: (ticker) => dispatch(deleteWatchlist(ticker)),
  fetchWatchlist: id => dispatch(fetchWatchlist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
