import { connect } from "react-redux";
import StockIndex from "./stock_index";
import { fetchAllStocks } from "../../actions/stock_actions";
import { selectAllStocks } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
	stocks: selectAllStocks(state)
});

const mapDispatchToProps = dispatch => ({
	fetchAllStocks: () => dispatch(fetchAllStocks())
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
