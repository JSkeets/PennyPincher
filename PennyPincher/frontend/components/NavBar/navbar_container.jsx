import { connect } from "react-redux";
import { logout, guest } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import { fetchWatchlist } from "../../actions/watchlist_actions";
import NavBar from "./nav_bar";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchWatchlist: id => dispatch(fetchWatchlist(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
