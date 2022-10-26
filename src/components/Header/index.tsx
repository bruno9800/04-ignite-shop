import Image from "next/future/image";

import { Handbag } from "phosphor-react";
import { CardBeforeContent, HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";

// Carting Dialog
import * as Dialog from "@radix-ui/react-dialog";
import { DialogCartItems } from "../DialogCartItems";

export function Header() {
	const { cartCount } = useShoppingCart();

	return (
		<HeaderContainer>
			<Link href={"/"}>
				<a>
					<Image src={logoImg} alt="" priority />
				</a>
			</Link>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<button>
						<Handbag size={24} weight="bold" />
						<CardBeforeContent>{cartCount}</CardBeforeContent>
					</button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<DialogCartItems />
				</Dialog.Portal>
			</Dialog.Root>
		</HeaderContainer>
	);
}
