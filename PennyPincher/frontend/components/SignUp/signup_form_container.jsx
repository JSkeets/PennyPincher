import { connect } from "react-redux";

import { createUser } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session || []
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
