import React from "react";
import "./buttonstyle.css";

function button1(nom, link) {
	return (
		<div className="hero_button_container">
			<a className="hero_button" href={link}>
				{nom}
			</a>
		</div>
	);
}

function button2(nom, link) {
	return (
		<button
			onClick={() => (window.location.href = link)}
			className="button2"
		>
			<div className="button2_text">
				<p>@{nom}</p>
			</div>
			<div className="button2_arrow">
				<img src="arrowTopRight.svg" alt="fleche" />
			</div>
		</button>
	);
}

export { button1, button2 };
