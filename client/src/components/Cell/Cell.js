import React from "react";
import styled from "styled-components";

const Cell = ({ entry, evaluation }) => {
	let borderColor = entry ? "#1A1A1B" : "#D3D6DA";
	let background = !evaluation
		? "white"
		: evaluation === "correct"
		? "green"
		: evaluation === "present"
		? "yellow"
		: "gray";
	return (
		<GameCell
			style={{
				"--borderColor": borderColor,
				"--backgroundColor": background,
			}}>
			{entry ? entry : ""}
		</GameCell>
	);
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
	background: var(--backgroundColor);
`;
export default Cell;
