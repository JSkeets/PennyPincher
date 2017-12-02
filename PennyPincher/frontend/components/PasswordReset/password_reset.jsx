import React from "react";
import { Link, withRouter } from "react-router-dom";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit} className="login-form">
            <i> Reset your Password </i>
            <br />
            <br />
            <div className="login-form">
              <br />
              <input
                type="password"
                placeholder="new password"
                className="input-txt"
                value={this.state.password}
                onChange={this.update("password")}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="confirm password"
                className="input-txt"
                value={this.state.password}
                onChange={this.update("password")}
              />
              <br />
              <div className="login-footer">
                <button type="submit" className="btn btn--right">
                  Rest Password{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PasswordReset);
