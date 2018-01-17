import { connect } from "react-redux";
import StockShow from "./stock_show";
import {
  fetchStock,
  fetchAllStocks,
  fetchTweets
} from "../../actions/stock_actions";
import { fetchComments, createComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  stocks: state.entities.stocks,
  tweets: state.entities.tweets,
  symbol: ownProps.match.params.stockTicker,
  comments: state.entities.comments,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchAllStocks: () => dispatch(fetchAllStocks()),
  fetchTweets: hashtag => dispatch(fetchTweets(hashtag)),
  fetchComments: ticker => dispatch(fetchComments(ticker)),
  createComment: (comment, ticker) => dispatch(createComment(comment, ticker))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
