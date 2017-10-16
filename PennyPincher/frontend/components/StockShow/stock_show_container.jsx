import { connect } from "react-redux";
import StockShow from "./stock_show";
import { fetchStock, fetchAllStocks } from "../../actions/stock_actions";
import fetchTweets from "../../actions/stock_actions";

const mapStateToProps = (state, ownProps) => ({
	stocks: state.entities.stocks,
	symbol: ownProps.match.params.stockTicker
});

const mapDispatchToProps = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol)),
	fetchAllStocks: () => dispatch(fetchAllStocks()),
	fetchTwitter: hashtag => dispatch(fetchTweets(hashtag))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
