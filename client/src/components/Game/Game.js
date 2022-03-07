import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isWordInList, evaluate, msToNextHour, toastMessage, setToLocalStorage } from "../../utils/helpers";
import GameBoard from "../GameBoard/GameBoard";
import KeyBoard from "../KeyBoard/KeyBoard";
import { GameContext } from "../../hooks/GameContext";
import useStickyState from "../../hooks/useStickyState";
import { UseDataContext } from "../../hooks/useDataProvider";

const initialBoardState = ["", "", "", "", "", ""];
const Game = ({ setGameStats, gameStats, currentTheme }) => {
	const { word } = useContext(UseDataContext);
	const [boardState, setBoardState] = useStickyState(initialBoardState, "boardState");

	const [rowIndex, setRowIndex] = useStickyState(0, "rowIndex");
	const [evaluations, setEvaluations] = useStickyState(Array(6).fill([]), "evaluations");
	const [keyboardState, setKeyBoardState] = useStickyState({}, "keyboardState");

	const { setGameState, setStatsModalOpen } = useContext(GameContext);

	useEffect(() => {
		if (rowIndex > 5) {
			toast(word);
			setGameState("LOSS");
			const gameStatsCopy = { ...gameStats };
			gameStatsCopy["losses"] = gameStatsCopy["losses"] + 1;
			setGameStats(gameStatsCopy);
			setTimeout(() => setStatsModalOpen(true), 2500);
		}
	}, [rowIndex]);
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
		setGameState("WIN");
		const gameStatsCopy = { ...gameStats };
		gameStatsCopy[rowIndex + 1] = gameStatsCopy[rowIndex + 1] + 1;
		gameStatsCopy["wins"] = gameStatsCopy["wins"] + 1;
		setGameStats(gameStatsCopy);
		setTimeout(() => setStatsModalOpen(true), 2500);
	};

	const enterClick = () => {
		// console.log(evaluate(boardState[rowIndex], word));
		// console.log("BOARD STATE", boardState);
		const currentWord = boardState[rowIndex];
		if (currentWord.length < 5) return;

		if (!isWordInList(currentWord)) {
			toast("Not in word list");
			return;
		}
		// localStorage.setItem(JSON.stringify("boardState", boardState));
		setToLocalStorage("boardState", boardState);
		// console.log(isWordInList(currentWord));
		let currentEvaluation = evaluate(boardState[rowIndex], word);
		let evaluationArr = [...evaluations];
		evaluationArr[rowIndex] = currentEvaluation;
		setEvaluations(evaluationArr);
		setToLocalStorage("evaluations", evaluationArr);
		setRowIndex(rowIndex + 1);
		setKeyBoardState(keyboardStatus());
		// console.log(clipboardContent(evaluations));

		if (currentWord === word) {
			correctGuessLogic();
		}

		if (rowIndex > 5) {
			toast(toastMessage[rowIndex]);
			setGameState("LOSS");
			const gameStatsCopy = { ...gameStats };
			gameStatsCopy["losses"] = gameStatsCopy["losses"] + 1;
			setGameStats(gameStatsCopy);
			setTimeout(() => setStatsModalOpen(true), 2500);
		}
	};

	const enterValue = (val) => {
		if (boardState[rowIndex].length >= 5) {
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
				currentTheme={currentTheme}
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
				theme={currentTheme.theme}
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
