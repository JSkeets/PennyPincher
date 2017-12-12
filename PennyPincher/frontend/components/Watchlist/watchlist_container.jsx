import { connect } from "react-redux";
import Watchlist from "./watchlist";
import { fetchAllStocks, fetchStock } from "../../actions/stock_actions";
import { selectAllStocks, stockInfo, watchlistStocks } from "../../reducers/selectors";
import { fetchWatchlist} from "../../actions/watchlist_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    stocks: watchlistStocks(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllStocks: () => dispatch(fetchAllStocks()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
