
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sessionLinks = () => (
	<div>
		<div className="nav-bar">
			<Link to={`/`} id="nameLink">
				<h1 className="name">6th Cent</h1>
			</Link>

			<Link className="login" to="/login/">
				Log In
			</Link>
		</div>

	</div>
);

const loggedInLinks = (currentUser, logout) => (
  <hgroup className="nav-bar-login">
    <div className="header-buttons">
      <div className="header-buttons-right">
        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
        <NavLink
          className="my-watchlist"
          to="/watchlist"
        >
          My Watchlist
        </NavLink>
      </div>
      <NavLink
        className="header-name"
        to="/dashboard"
      >
        Welcome {currentUser.username}
      </NavLink>
    </div>
    <div className="home-nav">
      <Link to={`/`} id="nameLink">
        <h1 className="name">6th Cent</h1>
      </Link>
    </div>
  </hgroup>
);

const NavBar = ({ currentUser, logout,fetchWatchlist}) =>
	currentUser ? fetchWatchlist(currentUser.id) && loggedInLinks(currentUser, logout) : sessionLinks();

export default NavBar;

