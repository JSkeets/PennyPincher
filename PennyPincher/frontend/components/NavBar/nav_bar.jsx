
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sessionLinks = () => (
	<div>
		<div className="nav-bar">
			<Link to={`/`} id="nameLink">
				<h1 className="name">Penny Pincher</h1>
			</Link>

			<Link to="login">
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
		<NavLink className="check-in" to="/checkin" activeClassName="is-active">
			CHECK IN
		</NavLink>
		<NavLink className="global" to="/the-bar" activeClassName="is-active">
			THE BAR
		</NavLink>
		<NavLink
			className="header-name"
			to="/dashboard"
			activeClassName="user-is-active"
		>
			Welcome {currentUser.username}
		</NavLink>
	</hgroup>
);

const NavBar = ({ currentUser, logout}) =>
	currentUser ?  loggedInLinks(currentUser, logout) : sessionLinks();

export default NavBar;

