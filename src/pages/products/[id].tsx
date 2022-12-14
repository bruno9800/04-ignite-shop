import Image from "next/future/image";
import {
	ImageContainer,
	ProductContainer,
	ProductDetails,
} from "../../styles/pages/productId";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
	product: {
		id: string;
		name: string;
		imageUrl: string;
		price: number;
		price_formatted: string;
		description: string;
		currency: string;
	};
}

export default function Product({ product }: ProductProps) {
	const { addItem } = useShoppingCart();
	const { isFallback } = useRouter();

	function handleAddItemToCart() {
		addItem(product);
	}

	if (isFallback) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<Head>
				<title>{product.name} | Ignite Shop</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image
						src={product.imageUrl}
						alt=""
						width={520}
						height={480}
						priority
					/>
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price_formatted}</span>

					<p>{product.description}</p>

					<button onClick={handleAddItemToCart}>Colocar na sacola</button>
				</ProductDetails>
			</ProductContainer>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: "prod_MfTCaX2TqLLkwy" } }],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
	params,
}) => {
	const productId = params.id;

	const product = await stripe.products.retrieve(productId, {
		expand: ["default_price"],
	});

	const price = product.default_price as Stripe.Price;

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				price: price.unit_amount,
				price_formatted: new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL",
				}).format(price.unit_amount / 100),
				description: product.description,
				price_data: price,
				currency: price.currency,
			},
		},
		revalidate: 60 * 60 * 1, // (60 * 60) == 1hr || 1 == quantidade de horas
	};
};
