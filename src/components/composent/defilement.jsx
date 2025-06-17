import { useEffect, useRef } from "react";
import "./defilement.css";

const Defilement = () => {
	const containerRef = useRef(null);

	const items = [
		"BONHEUR SIMPLE",
		"VUE SUR TOUR EIFFEL",
		"PLAT COEUR",
		"RIEN QUE DU BON !!"
	];

	useEffect(() => {
		const container = containerRef.current;
		const ul = container.querySelector("ul");
		const scrollSpeed = 1; // px par frame
		let animationFrameId;

		// Duplique le contenu une fois pour faire une boucle infinie
		const clone = ul.cloneNode(true);
		clone.style.marginLeft = "2vw";
		container.appendChild(clone);

		const totalScrollWidth = ul.scrollWidth;

		const scroll = () => {
			container.scrollLeft += scrollSpeed;

			// Reset scroll quand on arrive à la fin de la première moitié
			if (container.scrollLeft >= totalScrollWidth) {
				container.scrollLeft = 0;
			}

			animationFrameId = requestAnimationFrame(scroll);
		};

		scroll();

		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return (
		<div className="scrolling-marquee" ref={containerRef}>
			<ul className="marquee-list">
				{items.map((item, i) => (
					<>
						<li key={i}>
							<p>{item}</p>
						</li>
						<p className="separator"> • </p>
					</>
				))}
			</ul>
		</div>
	);
};

export default Defilement;
