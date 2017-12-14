import { connect } from "react-redux";
import Watchlist from "./watchlist";
import { fetchAllStocks, fetchStock } from "../../actions/stock_actions";
import { selectAllStocks, stockInfo, watchlistStocks } from "../../reducers/selectors";
import { fetchWatchlist,updateWatchlist,deleteWatchlist} from "../../actions/watchlist_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    stocks: watchlistStocks(state),
    user: state.session.currentUser.id,
    watchlistId: state.entities.watchlist.watchlistId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllStocks: () => dispatch(fetchAllStocks()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  processForm: (ticker) => dispatch(updateWatchlist(ticker)),
  deleteWatchlist: (ticker) => dispatch(deleteWatchlist(ticker))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
