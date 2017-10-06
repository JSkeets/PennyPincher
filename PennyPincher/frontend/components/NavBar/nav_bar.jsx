import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<Link to={`/`} id="nameLink">
				<h1 className="name">Penny Pincher</h1>
			</Link>
		</div>
	);
};

export default NavBar;
