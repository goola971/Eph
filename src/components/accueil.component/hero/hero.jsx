import React from "react";
import AccueilImg from "../../../assets/accueil/hero.png";
import LogoText from "../../../assets/logoEtText.png";
import { button1 } from "../../composent/button";
import "./hero.css";

function hero() {
	return (
		<>
			<section className="hero" id="hero">
				<div className="hero_container">
					<img src={LogoText} alt="Title" />
					<p>
						Que vous soyez en quête d’une pause gourmande <br />{" "}
						entre amis ou d’un dîner romantique aux chandelles,{" "}
						<br />
						notre carte est là pour transformer vos envies en <br />
						souvenirs savoureux.
					</p>
					{button1("MENU", "#menu")}
				</div>
				<div
					className="hero_img"
					style={{ backgroundImage: `url(${AccueilImg})` }}
				></div>
			</section>
		</>
	);
}

export default hero;
