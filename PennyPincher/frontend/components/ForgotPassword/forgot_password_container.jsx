import { connect } from "react-redux";

import {resetEmail} from "../../actions/session_actions";
import ForgotPassword from "./forgot_password";

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(resetEmail(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
