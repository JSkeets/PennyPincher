import { connect } from "react-redux";

import { resetPassword } from "../../actions/session_actions";
import PasswordReset from "./password_reset";

const mapStateToProps = (state,ownProps) => {
  let length = ownProps.location.search.length;
  let parsedEmail = decodeURIComponent(ownProps.location.search.slice(7));
  let parsedId = decodeURIComponent(ownProps.location.pathname.split("/")[2]);
  return ({
    email: parsedEmail,
    id: parsedId
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(resetPassword(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
