import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

interface ProductType {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
	currency: string;
	price_formatted: string;
}

interface HomeProps {
	products: ProductType[];
}

export default function Home({ products }: HomeProps) {
	const { addItem } = useShoppingCart();
	const [sliderRef] = useKeenSlider({
		mode: "free",
		slides: {
			perView: 3,
			spacing: 48,
		},
	});

	function handleAddItemToCart(product: ProductType) {
		console.log("oi");
		addItem(product);
	}
	return (
		<>
			<Head>
				<title>Home | Ignite Shop</title>
			</Head>

			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map((product) => {
					return (
						<Product className="keen-slider__slide" key={product.id}>
							<Link href={`/products/${product.id}`} prefetch={false}>
								<a>
									<Image
										src={product.imageUrl}
										width={520}
										height={480}
										alt=""
										priority
									/>
								</a>
							</Link>
							<footer>
								<div>
									<strong>{product.name}</strong>
									<span>{product.price_formatted}</span>
								</div>
								<button
									onClick={() => {
										handleAddItemToCart(product);
									}}
								>
									<Handbag size={32} weight="bold" />
								</button>
							</footer>
						</Product>
					);
				})}
			</HomeContainer>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	//const { addItem } = useShoppingCart();
	const response = await stripe.products.list({
		expand: ["data.default_price"],
	});

	// async function handleAddItemToCart(productId: string) {
	// 	const response = await stripe.products.retrieve(productId, {
	// 		expand: ["data.default_price"],
	// 	})

	// 	addItem(response)
	// }

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: price.unit_amount,
			price_data: price,
			price_formatted: new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price.unit_amount / 100),
		};
	});

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 2, // seconds * minutes * number of days
	};
};
