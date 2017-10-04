import { connect } from "react-redux";
import StockShow from "./stock_show";
import { fetchStock, fetchStockStats } from "../../actions/stock_actions";

const mapStateToProps = (state, ownProps) => ({
	stocks: state.entities.stocks,
	symbol: ownProps.match.params.stockTicker
});

const mapDispatchToProps = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol)),
	fetchStockStats: symbol => dispatch(fetchStockStats(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
