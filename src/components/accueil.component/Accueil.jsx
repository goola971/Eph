import React from "react";
import hero from "./hero/hero";
import menu from "./menu/menu";
import Footer from "./footer/footer";
import { button1, button2 } from "../composent/button";
import "./accueil.css";

function Accueil() {
	return (
		<>
			{hero()}
			{menu()}
			<section className="remise">
				<article className="remise_top">
					<div>
						<p>
							Réservez votre table pour vendredi et{" "}
							<span>profitez de -40%</span>
						</p>
						<p>
							sur tout le menu. Parce que la semaine mérite une
							belle fin… et un bon plan gourmand !
						</p>
						{button1("RESERVER", "#reserver")}
					</div>
					<img src="remise.png" alt="remise" />
				</article>
				<article className="remise_bottom">
					<div className="remise_bottom_left">
						<p>
							Ils ont aimé… et ils le disent fort ! <br />
							voir les reseaux
						</p>
						<img src="Vector 21.svg" alt="fleche" />
					</div>
					<div className="remise_bottom_right">
						<div className="hautLink">
							{button2("Linkedin", "https://www.linkedin.com/")}
							{button2("Facebook", "https://www.facebook.com/")}
							{button2("Instagram", "https://www.instagram.com/")}
							{button2("X", "https://x.com/")}
							{button2("Email", "mailto:contact@restaurant.com")}
						</div>
						<p className="basLink">
							Pour les réserver, questions spécifiques ou offres
							spéciales, privilégiez Facebook ou l'email <br />
							direct de l'établissement.
						</p>
					</div>
				</article>
			</section>
			<section className="about">
				<h3>À propos de L’Éphanciel</h3>
				<p>
					Situé au 15ᵉ étage de l’hôtel Mercure à Rungis , L’Éphanciel
					est bien plus qu’un simple restaurant : c’est un lieu
					suspendu entre ciel et terre , où chaque bouchée
					s’accompagne d’une vue imprenable sur la Tour Eiffel et la
					ville qui brille.
				</p>

				<p>
					Ici, on ne se contente pas de servir des plats on compose
					des expériences gourmandes , mêlant saveurs modernes,
					produits de qualité et ambiance feutrée. Que ce soit pour un
					dîner romantique , un déjeuner professionnel ou simplement
					profiter d’un moment hors du temps , L’Éphanciel vous invite
					à lever les yeux… et les fourchettes.
				</p>
				<p>
					Le nom même de notre établissement est né d’un mélange de
					rêve et de réalité : “Éphémère” comme le temps qui passe ,
					“Ciel” comme l’espace qui nous entoure . Une façon de vous
					rappeler que le bonheur est parfois là-haut … à portée
					d’assiette.
				</p>
				<div className="about_button">
					{button1("GALLERIE", "#gallerie")}
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Accueil;
