import { connect } from "react-redux";

import { resetPassword } from "../../actions/session_actions";
import PasswordReset from "./password_reset";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(resetPassword(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
