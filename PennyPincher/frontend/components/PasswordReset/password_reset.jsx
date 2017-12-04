import React from "react";
import { Link, withRouter } from "react-router-dom";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordConfirm: "",
      email: this.props.email,
      id: this.props.id,
      match: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordConfirm = this.passwordConfirm.bind(this);
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
    // console.log(this.passwordConfirm(this.state.password,this.state.passwordConfirm));
    // if (this.passwordConfirm(this.state.password,this.state.passwordConfirm)){
      this.props.processForm(user);
    // } else {
    //   this.setState({password: "", passwordConfirm: ""});
    //   console.log(this.state);
    //   console.log("Passwords must match");
    // }
  }

  passwordConfirm(pw1,pw2) {
    return (pw1 == pw2);
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
    console.log(this.props);
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
              <input
                type="hidden"
                value={this.props.email}
              />
              <input
                type="hidden"
                value={this.props.id}
              />
              <br />
              <input
                type="password"
                placeholder="confirm password"
                className="input-txt"
                value={this.state.passwordConfirm}
                onChange={this.update("passwordConfirm")}
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
