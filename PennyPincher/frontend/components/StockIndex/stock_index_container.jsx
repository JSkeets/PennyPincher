import { connect } from "react-redux";
import StockIndex from "./stock_index";
import { fetchAllStocks, fetchStock } from "../../actions/stock_actions";
import { selectAllStocks } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
	stocks: selectAllStocks(state)
});

const mapDispatchToProps = dispatch => ({
	fetchAllStocks: () => dispatch(fetchAllStocks()),
	fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
