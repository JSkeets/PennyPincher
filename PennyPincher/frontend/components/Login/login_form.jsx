import React from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    return <Link to="/signup"> New? Sign Up!</Link>;
  }

//   renderErrors() {
//     return (
//       <ul className="session-errors">
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>{error}</li>
//         ))}
//       </ul>
//     );
//   }

  render() {
    return <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit} className="login-form">
            <i> Welcome to Penny Pincher </i>
            <br />
            <i>Please Log In </i>
            <br />
            <div className="login-form">
              <br />
              <input type="text" placeholder="username" className="input-txt" value={this.state.username} onChange={this.update("username")} />
              <br />
              <input type="password" placeholder="password" className="input-txt" value={this.state.password} onChange={this.update("password")} className="login-input" />
              <br />
              <div className="login-footer">
                <Link to="/forgot"> Forgot your password? </Link>
                <button type="submit" className="btn btn--right">
                  Sign in{" "}
                </button>
                <div className="signup-button">
                  Don't have an account?&nbsp;
                  <Link to="/signup">Create one!</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>;

  }
}

export default withRouter(LoginForm);
