import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone_number: "",
      fname:"",
      lname:""
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
    return <Link to="/login"> Already a user? Login!</Link>;
  }

  // renderErrors() {
  //   return (
  //     <ul className="user-errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            Welcome to Straight Up
            <br />
            Create an account
            <br />
            <div className="login-form">
              <br />

              <input type="text" placeholder="username" value={this.state.username} onChange={this.update("username")} className="signup-input" />

              <br />

              <input type="password" placeholder="password" value={this.state.password} onChange={this.update("password")} className="signup-input" />

              <br />

              <input type="email" placeholder="email" value={this.state.email} onChange={this.update("email")} className="signup-input" />

              <br />

              <input type="tel" placeholder="phone number" value={this.state.phone_number} onChange={this.update("phone_number")} className="signup-input" />

              <br />

              <input type="text" placeholder="first name" value={this.state.fname} onChange={this.update("fname")} className="signup-input" />
              <input type="text" placeholder="last name" value={this.state.lname} onChange={this.update("lname")} className="signup-input" />

              <br />
              <div className="submit-button">
                <button className="submit-button" type="submit">
                  SIGN UP
                </button>
              </div>
              <div className="signup-button">
                Already have an account?&nbsp;
                <Link to="/login">Log in!</Link>
              </div>
            </div>
          </form>
        </div>
      </div>;
  }
}

export default withRouter(SignUpForm);
