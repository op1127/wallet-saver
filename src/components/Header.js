import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="header__bg"></div>
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<img
						className="header__logo"
						src="/img/ws-logo-white.svg"
						alt="Logo"
					></img>
				</Link>
				<button className="btn btn__small" onClick={startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
