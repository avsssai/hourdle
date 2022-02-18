import React, { useState } from "react";
import styled from "styled-components";
import { evaluate } from "../../utils/helpers";
import GameBoard from "../GameBoard/GameBoard";
import KeyBoard from "../KeyBoard/KeyBoard";

const Game = ({ word }) => {
	const [boardState, setBoardState] = useState(["", "", "", "", "", ""]);
	const [rowIndex, setRowIndex] = useState(0);
	const [evaluations, setEvaluations] = useState(Array(6).fill(null));

	const enterClick = () => {
		console.log(evaluate(boardState[rowIndex], word));
		let currentEvaluation = evaluate(boardState[rowIndex], word);
		let evaluationArr = [...evaluations];
		evaluationArr[rowIndex] = currentEvaluation;
		setEvaluations(evaluationArr);
		setRowIndex(rowIndex + 1);
	};

	const enterValue = (val) => {
		console.log(val, "two");
		if (boardState[rowIndex].length > 6) {
			return;
		}
		let term = boardState[rowIndex] + val;
		let copyArr = boardState.slice();
		copyArr[rowIndex] = term;
		setBoardState(copyArr);
	};

	const deleteEntry = () => {
		let newWord = boardState[rowIndex];
		newWord = newWord.slice(0, newWord.length - 1);
		let newArr = boardState.slice();
		newArr[rowIndex] = newWord;
		setBoardState(newArr);
	};
	return (
		<GameWrapper>
			<BoardWrapper>
				<GameBoard word={word} boardState={boardState} />
			</BoardWrapper>
			<KeyBoard enterValue={enterValue} deleteEntry={deleteEntry} enterClick={enterClick} />
		</GameWrapper>
	);
};

const GameWrapper = styled.div`
	padding: 5px 5px 0px 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	align-content: center;
	margin: 1rem auto;

	@media (min-width: 500px) {
		max-width: 350px;
	}
`;

const BoardWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
`;

export default Game;
