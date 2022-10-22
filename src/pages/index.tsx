import { styled } from "../styles";

const Button = styled("button", {
	backgroundColor: "$green300",
	borderRadius: 4,
	border: 0,
	padding: "0.5rem 1rem",
	color: "$white",
});

export default function Home() {
	return (
		<div>
			<Button>Enviar</Button>
		</div>
	);
}
