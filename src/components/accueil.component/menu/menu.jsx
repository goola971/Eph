import "./menu.css";
import Defilement from "../../composent/defilement";
// importer tout les images dans assets/product

const Menu = () => {
	const productLink = "product/starters/";
	const productStarters = [
		{
			name: "Nuage de burrata au pesto de Comté",
			englishName: "(Cloud of Burrata with Comté pesto)",
			more: "Sur jardin méditerranéen et éclats de comté.",
			image: "nuage.png",
			price: "10.00"
		},
		{
			name: "Soupe du soleil",
			englishName: "(Sunshine soup)",
			more: "Melon, pastèque et feta.",
			image: "soupe.png",
			price: "10.00"
		},
		{
			name: "Trésors en croûte de volaille",
			englishName: "(Poultry crusted treasures)",
			more: "Pistache et cranberry.",
			image: "tresor.png",
			price: "12.00"
		},
		{
			name: "Mimosa d'antan",
			englishName: "(Vintage mimosa with seasonal pea hummus.)",
			more: "Houmous de saison au petit pois.",
			image: "mimosa.png",
			price: "08.00"
		},
		{
			name: "Saumon extique",
			englishName: "(Exotic salmon, coriander coconut cream.)",
			more: "Crème de coco à la coriandre et fruits du soleil.",
			image: "saumon.png",
			price: "11.00"
		}
	];
	return (
		<section className="menu" id="menu">
			<Defilement />
			<div className="menu__container">
				<aside>
					<ul>
						<li>
							<a href="" className="active">
								STARTERS
							</a>
						</li>
						<li>
							<a href="">MAIN COURSES</a>
						</li>
						<li>
							<a href="">DESSERTS</a>
						</li>
						<li>
							<a href="">SIDE DISHES</a>
						</li>
					</ul>
				</aside>
				<section className="profuctContainer">
					{productStarters.map((product) => (
						<article className="product">
							<div className="product__image">
								{/* concatenation de productLink et product.image */}
								<img
									src={productLink + product.image}
									alt={product.image}
								/>
							</div>
							<div className="product__info">
								<div className="product__name">
									<p>{product.name}</p>
									<p>{product.englishName}</p>
								</div>
								<div className="product__more">
									<p>{product.more}</p>
									<p>{product.price}€</p>
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</section>
	);
};

export default Menu;
