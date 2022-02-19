import React, { useState } from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";

const GameBoard = ({ word, boardState, evaluations }) => {
	return (
		<Wrapper>
			<Row>
				{/* {boardState[0].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[0][0]} evaluation={evaluations[0][0]} />
				<Cell entry={boardState[0][1]} evaluation={evaluations[0][1]} />
				<Cell entry={boardState[0][2]} evaluation={evaluations[0][2]} />
				<Cell entry={boardState[0][3]} evaluation={evaluations[0][3]} />
				<Cell entry={boardState[0][4]} evaluation={evaluations[0][4]} />
			</Row>
			<Row>
				{/* {boardState[1].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[1][0]} evaluation={evaluations[1][0]} />
				<Cell entry={boardState[1][1]} evaluation={evaluations[1][1]} />
				<Cell entry={boardState[1][2]} evaluation={evaluations[1][2]} />
				<Cell entry={boardState[1][3]} evaluation={evaluations[1][3]} />
				<Cell entry={boardState[1][4]} evaluation={evaluations[1][4]} />
			</Row>
			<Row>
				{/* {boardState[2].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[2][0]} evaluation={evaluations[2][0]} />
				<Cell entry={boardState[2][1]} evaluation={evaluations[2][1]} />
				<Cell entry={boardState[2][2]} evaluation={evaluations[2][2]} />
				<Cell entry={boardState[2][3]} evaluation={evaluations[2][3]} />
				<Cell entry={boardState[2][4]} evaluation={evaluations[2][4]} />
			</Row>
			<Row>
				{/* {boardState[3].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[3][0]} evaluation={evaluations[3][0]} />
				<Cell entry={boardState[3][1]} evaluation={evaluations[3][1]} />
				<Cell entry={boardState[3][2]} evaluation={evaluations[3][2]} />
				<Cell entry={boardState[3][3]} evaluation={evaluations[3][3]} />
				<Cell entry={boardState[3][4]} evaluation={evaluations[3][4]} />
			</Row>
			<Row>
				{/* {boardState[4].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[4][0]} evaluation={evaluations[4][0]} />
				<Cell entry={boardState[4][1]} evaluation={evaluations[4][1]} />
				<Cell entry={boardState[4][2]} evaluation={evaluations[4][2]} />
				<Cell entry={boardState[4][3]} evaluation={evaluations[4][3]} />
				<Cell entry={boardState[4][4]} evaluation={evaluations[4][4]} />
			</Row>
			<Row>
				{/* {boardState[5].split("").map((letter) => (
					<Cell entry={letter === "#" ? "" : letter} />
				))} */}
				<Cell entry={boardState[5][0]} evaluation={evaluations[5][0]} />
				<Cell entry={boardState[5][1]} evaluation={evaluations[5][0]} />
				<Cell entry={boardState[5][2]} evaluation={evaluations[5][0]} />
				<Cell entry={boardState[5][3]} evaluation={evaluations[5][0]} />
				<Cell entry={boardState[5][4]} evaluation={evaluations[5][0]} />
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 0.25rem;
	gap: 5px;
`;
const Row = styled.div`
	display: flex;
	gap: 5px;
	width: 348px;
	margin: 0 auto;
	justify-content: center;
`;
export default GameBoard;
