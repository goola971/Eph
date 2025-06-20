import React from "react";
import Defilement from "../../composent/defilement";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<Defilement />
			<footer>
				<h2>GET IN TOUCH</h2>
				<section>
					{/* position carte avec google maps */}
					<article>
						<div>
							<button>
								<img src="world.svg" alt="share" />
							</button>
						</div>
						<div>
							<div>
								<p>NOUS ENVOYER UN MESSAGE...</p>
								<button>
									<img src="share.svg" alt="share" />
								</button>
							</div>
							<ul>
								<li>
									<a href="">FAQ</a>
								</li>
								<li>
									<a href="">ABOUT</a>
								</li>
								<li>
									<a href="">TERMS OF SERVICES</a>
								</li>
								<li>
									<a href="">RESERVATION</a>
								</li>
							</ul>
							<div>
								<button>
									<img src="up.svg" alt="up" />
								</button>
								<button>
									<p>V.01</p>
								</button>
							</div>
							<section>
								<p>HEURE D'OUVERTURE : </p>
								<table>
									<tr>
										<td>
											<p>Mon - Thu</p>
											<p>12am - 9pm</p>
										</td>
										<td>
											<p>Fri - Sat</p>
											<p>12am - 9pm</p>
										</td>
										<td>
											<p>Sun</p>
											<p>12am - 6pm</p>
										</td>
									</tr>
								</table>
								<a href="">
									<img src="location.svg" alt="" />
									<p>
										20 Avenue Charles Lindbergh 94150 Rungis
									</p>
								</a>
								<a href="">
									<img src="phone.svg" alt="" />
									<p>+33 08 90 10 71 37</p>
								</a>
							</section>
						</div>
					</article>
				</section>
				<div className="footer_bottom">
					<p>© Mentions légales – Droits réservés</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
