import React from "react";
import { Link, withRouter } from "react-router-dom";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ""
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
            <i> Forgot your password? </i>
            <br />
            <br />
            <div className="login-form">
              <br />
              <input
                type="text"
                placeholder="email"
                className="input-txt"
                value={this.state.email}
                onChange={this.update("email")}
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

export default withRouter(ForgotPassword);
