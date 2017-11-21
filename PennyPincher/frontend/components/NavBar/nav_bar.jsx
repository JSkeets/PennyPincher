
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sessionLinks = () => (
	<div>
		<div className="nav-bar">
			<Link to={`/`} id="nameLink">
				<h1 className="name">Penny Pincher</h1>
			</Link>

			<Link className="login" to="login">
				Log In
			</Link>
		</div>

	</div>
);

const loggedInLinks = (currentUser, logout) => (
  <hgroup className="header-group">
    <button className="logout-button" onClick={logout}>
      LOG OUT
    </button>
    <NavLink
      className="my_watchlist"
      to="/watchlist"
      activeClassName="is-active"
    >
      My Watchlist
    </NavLink>
    <NavLink
      className="header-name"
      to="/dashboard"
      activeClassName="user-is-active"
    >
      Welcome {currentUser.username}
    </NavLink>
    <div className="nav-bar">
      <Link to={`/`} id="nameLink">
        <h1 className="name">Penny Pincher</h1>
      </Link>
    </div>
  </hgroup>
);

const NavBar = ({ currentUser, logout}) =>
	currentUser ?  loggedInLinks(currentUser, logout) : sessionLinks();

export default NavBar;

