import { connect } from "react-redux";

import { login, logout } from "../../actions/session_actions";
  import { fetchWatchlist } from "../../actions/watchlist_actions";

import LoginForm from "./login_form";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  fetchWatchlist: id => dispatch(fetchWatchlist(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
