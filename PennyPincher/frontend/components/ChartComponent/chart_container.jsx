import { connect } from "react-redux";
import ChartComponent from "./chart";
import { fetchStock, fetchAllStocks } from "../../actions/stock_actions";

const mapStateToProps = (state, ownProps) => ({
	stocks: state.entities.stocks,
	symbol: ownProps.match.params.stockTicker
});

const mapDispatchToProps = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
