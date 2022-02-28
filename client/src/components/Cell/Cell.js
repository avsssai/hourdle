import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

const Cell = ({ entry, evaluation, item }) => {
	let borderColor = entry ? "#1A1A1B" : "#D3D6DA";
	let background = !evaluation
		? "white"
		: evaluation === "correct"
		? "green"
		: evaluation === "present"
		? "yellow"
		: "gray";

	if (!evaluation) {
		return (
			<GameCell
				style={{
					"--borderColor": borderColor,
				}}>
				{entry ? entry : ""}
			</GameCell>
		);
	} else {
		return (
			<Rotate
				style={{
					"--borderColor": borderColor,
					"--backgroundColor": background,
					"--timeout": `${item * 100}ms`,
				}}>
				{entry ? entry : ""}
			</Rotate>
		);
	}
};

const GameCell = styled.div`
	border: 2px solid var(--borderColor);
	height: 60px;
	width: 60px;
	font-size: 2rem;
	line-height: 2rem;
	text-transform: capitalize;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-weight: 800;
	font-family: "Clear Sans", "Segoe UI", Tahoma, Geneva, Verdana, Arial, sans-serif;
	/* background: var(--backgroundColor); */
	background: white;
`;

const rotate = keyframes`
	from {
		transform: rotateX(270deg);
	}

	to {
		transform: rotateX(360deg);
	}
`;

const Rotate = styled(GameCell)`
	/* display: inline-block; */
	animation: ${rotate} var(--timeout) ease-in;
	background: var(--backgroundColor);
	/* padding: 2rem 1rem; */
	/* font-size: 1.2rem; */
`;
export default Cell;

{
	/* <GameCell
style={{
	"--borderColor": borderColor,
	"--backgroundColor": background,
}}>
{entry ? entry : ""}
</GameCell> */
}
