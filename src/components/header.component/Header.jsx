import React from "react";
// importer les images dans assets
import logo from "../../assets/logo.png";
import place from "../../assets/place.svg";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="header__container_left">
				<div className="header__logo">
					<img src={logo} alt="" />
					<p>
						Ephanciel <br />
						Restaurant
					</p>
				</div>
				<nav>
					<ul>
						<li>
							<a href="#">MENU</a>
						</li>
						<li>
							<a href="#">RESERVATION</a>
						</li>
						<li>
							<a href="#">ABOUT</a>
						</li>
						<li>
							<a href="#">GALLERY</a>
						</li>
						<li>
							<a href="#">CONTACTS</a>
						</li>
					</ul>
				</nav>
			</div>
			<button>
				<img src={place} alt="" />
			</button>
		</header>
	);
}

export default Header;
