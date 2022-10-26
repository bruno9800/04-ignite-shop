import Image from "next/future/image";
import {
	CartProduct,
	Content,
	DialogContent,
	ImageContainer,
	Info,
	ListCartProducts,
	Overlay,
	Td,
	Title,
} from "./styles";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import axios from "axios";

export function DialogCartItems() {
	const { cartCount, formattedTotalPrice, cartDetails, removeItem } =
		useShoppingCart();
	const [createCheckoutSession, setCreateCheckoutSession] = useState(false);
	async function handleBuyProduct() {
		try {
			setCreateCheckoutSession(true);
			const response = await axios.post("/api/checkout", {
				cartDetails,
			});

			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (err) {
			// Ferramentas de observabilidade (DataDog, Sentry);
			setCreateCheckoutSession(false);
			alert("Falha ao redirecionar" + err);
		}
	}

	const stringItem = () => {
		if (!cartCount) return "vazio";

		return cartCount > 1 ? " itens" : " item";
	};

	console.log(cartDetails);
	return (
		<>
			<Overlay />
			<DialogContent>
				<Content>
					<Title>Sacola de compras</Title>
					<ListCartProducts>
						{Object.values(cartDetails).map((product) => {
							return (
								<CartProduct key={product.id}>
									<ImageContainer>
										<Image
											src={product.imageUrl}
											width={100}
											height={100}
											alt=""
										/>
										<div>
											<span>{product.quantity}</span>
										</div>
									</ImageContainer>
									<Info>
										<div>
											<strong>{product.name}</strong>
											<span>{product.formattedValue}</span>
										</div>

										<button
											disabled={createCheckoutSession}
											onClick={() => removeItem(product.id)}
										>
											Remover
										</button>
									</Info>
								</CartProduct>
							);
						})}
					</ListCartProducts>

					<footer>
						<table>
							<tbody>
								<tr>
									<td>Quantidade</td>
									<Td variant="small">
										{cartCount} {stringItem()}
									</Td>
								</tr>
								<tr>
									<Td variant="medium">Valor total</Td>
									<Td variant="large">{formattedTotalPrice}</Td>
								</tr>
							</tbody>
						</table>

						<button onClick={handleBuyProduct}>Finalizar Compra</button>
					</footer>
				</Content>
			</DialogContent>
		</>
	);
}
