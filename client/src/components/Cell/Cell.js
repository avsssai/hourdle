import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../hooks/ThemeContext";

const Cell = ({ entry, evaluation, item }) => {
	const { currentTheme } = useContext(ThemeContext);
	let borderColor = entry ? currentTheme.activeBorderColor : currentTheme.borderColor;
	let background = !evaluation
		? currentTheme.background
		: evaluation === "correct"
		? currentTheme.correct
		: evaluation === "present"
		? currentTheme.present
		: currentTheme.absent;
	let completedBorderColor = currentTheme.completedBorderColor;
	let color = currentTheme.color;
	if (!evaluation) {
		return (
			<GameCell
				style={{
					"--borderColor": borderColor,
					"--color": color,
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
					"--completedBorderColor": completedBorderColor,
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
	background: var(--background);
	color: var(--color);
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
	color: white;
	border-color: var(--completedBorderColor);

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
