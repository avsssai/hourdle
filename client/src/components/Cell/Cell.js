import React from "react";
import styled from "styled-components";

const Cell = ({ entry }) => {
	let borderColor = entry ? "#1A1A1B" : "#D3D6DA";
	return (
		<GameCell
			style={{
				"--borderColor": borderColor,
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
`;
export default Cell;
