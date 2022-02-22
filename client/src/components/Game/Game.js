import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isWordInList, evaluate, msToNextHour, toastMessage } from "../../utils/helpers";
import GameBoard from "../GameBoard/GameBoard";
import KeyBoard from "../KeyBoard/KeyBoard";

const Game = ({ word }) => {
	const [boardState, setBoardState] = useState(["", "", "", "", "", ""]);
	const [rowIndex, setRowIndex] = useState(0);
	const [evaluations, setEvaluations] = useState(Array(6).fill([]));
	const [keyboardState, setKeyBoardState] = useState({});

	function keyboardStatus() {
		let letters = boardState[rowIndex].slice();
		let evaluation = evaluate(boardState[rowIndex], word);
		const res = { ...keyboardState };
		for (let i = 0; i < letters.length; i++) {
			if (!(letters[i] in res)) {
				res[letters[i]] = [];
			}
			res[letters[i]] = [...res[letters[i]], evaluation[i]];
		}
		return res;
	}

	const correctGuessLogic = () => {
		//1.  calculate the timer to next wordle - display clock
		//2. activate the modal - send modal the stats till now and time to next game
		//3. make buttons inactive
		toast(toastMessage(rowIndex));
		localStorage.setItem("lastCompletedTS", msToNextHour());
	};

	const enterClick = () => {
		console.log(evaluate(boardState[rowIndex], word));
		console.log("BOARD STATE", boardState);
		const currentWord = boardState[rowIndex];
		if (currentWord.length < 5) return;

		if (!isWordInList(currentWord)) {
			toast("Not in word list");
			console.log("dne");
			return;
		}
		// console.log(isWordInList(currentWord));
		let currentEvaluation = evaluate(boardState[rowIndex], word);
		let evaluationArr = [...evaluations];
		evaluationArr[rowIndex] = currentEvaluation;
		setEvaluations(evaluationArr);
		setRowIndex(rowIndex + 1);
		setKeyBoardState(keyboardStatus());

		if (currentWord === word) {
			correctGuessLogic();
		}

		if (rowIndex > 5) {
			toast(toastMessage[rowIndex]);
		}
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
				<GameBoard word={word} boardState={boardState} evaluations={evaluations} />
			</BoardWrapper>
			<KeyBoard
				enterValue={enterValue}
				deleteEntry={deleteEntry}
				enterClick={enterClick}
				boardState={boardState}
				evaluations={evaluations}
				keyboardState={keyboardState}
			/>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='dark'
			/>
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
