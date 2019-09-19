import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

export const LandingPage = ({ startLogin }) => {
	function handleScroll() {
		document.querySelector('.description').scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div>
			<nav className="nav">
				<div className="nav__content">
					<img
						src="./img/ws-logo.svg"
						alt="Wallet Saver Logo"
						className="nav__logo"
					/>
					<button className="btn nav__btn btn__outline" onClick={startLogin}>
						Get Started
					</button>
				</div>
			</nav>

			<div className="hero-bg hero-bg__3"></div>
			<div className="hero-bg hero-bg__2"></div>

			<header className="hero">
				<div className="hero__content">
					<div className="hero__text">
						<h1 className="hero__heading">Expense Tracking Made Easy</h1>
						<p className="hero__copy">
							The site is meant for portfolio/showcase usage only. Wallet Saver
							is a finance tracking web app built using React, Redux, and
							Firebase.
						</p>
						<button className="btn hero__btn" onClick={handleScroll}>Learn More</button>
					</div>
					<img
						src="./img/hero-image.svg"
						alt="Image depicting people happy with wallet"
						className="hero__img"
					/>
				</div>
			</header>

			<section id="scroll" className="description">
				<img
					src="./img/dollars-img.png"
					alt="Dollar image"
					className="dollars"
				/>
				<div className="description__content">
					<div className="description__text">
						<h3 className="description__heading">
							Your personal financial assistant
						</h3>
						<p className="description__copy">
							I created this app to showcase my proficiency in using modern
							Javascript frameworks. I used React for the frontend, Node.js for
							the backend, and Google Firebase for data persistance. The design
							for this landing page is done in vanilla CSS using Flexbox and CSS
							Grid. While I consider myself more of a front-end dev, I do plan
							on going full-stack in the near future.
						</p>
					</div>
					<img
						src="./img/laptop.svg"
						alt="Laptop with Data"
						className="description__img"
					/>
				</div>
			</section>

			<section className="features">
				<div className="features__content">
					<h3 className="features__heading">
						What can <span>Wallet Saver</span> offer?
					</h3>
					<div className="item">
						<div className="item__container">
							<img
								src="./img/add.svg"
								alt="Man using laptop"
								className="item__img"
							/>
							<h4 className="item__heading">Add and edit expenses</h4>
							<p className="item__description">
								Wallet Saver allows you to add expenses and also edit them. I
								used Validator.js to sanitize and format the text input.
							</p>
						</div>

						<div className="item__container">
							<img
								src="./img/categorize.svg"
								alt="Woman with checklist"
								className="item__img"
							/>
							<h4 className="item__heading">Sort expenses</h4>
							<p className="item__description">
								You can sort your expenses by amount or the date added. I used a
								third-party web component for the date picker.
							</p>
						</div>

						<div className="item__container">
							<img
								src="./img/search.svg"
								alt="Woman using laptop"
								className="item__img"
							/>
							<h4 className="item__heading">Search for expenses</h4>
							<p className="item__description">
								You can also easily search for expenses by name. The total
								amount will update to reflect the expenses found.
							</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="footer__content">
					<button className="btn footer__btn" onClick={startLogin}>
						View APP
					</button>
					<p className="footer__description">
						This is only a proof of concept and the design is a preview of the
						full page. If you have any inquiries, feel free to{" "}
						<a href="mailto:OmarPlasencia@protonmail.com">contact me.</a>{" "}
						Thanks!
					</p>
				</div>
				<div className="footer__author">
					<p>
						© <span className="date-year"></span> || Designed and Developed by{" "}
						<a href="http://omarap.com">Omar Plasencia</a>
					</p>
				</div>
			</footer>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(
	undefined,
	mapDispatchToProps
)(LandingPage);

//<button className="button btn-box" onClick={startLogin}>Login with Google</button>
