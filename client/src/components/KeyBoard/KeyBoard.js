import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Delete } from "react-feather";
import { GameContext } from "../../hooks/GameContext";
import useKeyPress from "../../hooks/useKeyPress";
import { ThemeContext } from "../../hooks/ThemeContext";
import { getFromLocalStorage } from "../../utils/helpers";

const KeyBoard = ({ enterValue, deleteEntry, enterClick, keyboardState }) => {
	const { gameState, setGameState } = useContext(GameContext);
	const { currentTheme } = useContext(ThemeContext);
	useEffect(() => {
		const expiryTime = getFromLocalStorage("gameResetTime");
		let timeNow = Date.now();
		if (expiryTime) {
			console.log(expiryTime, timeNow, expiryTime < timeNow);
			if (expiryTime < timeNow) {
				setGameState("IN_PROGRESS");
				console.log("fired");
			}
		}
	}, []);
	const enterPress = useKeyPress("q");
	// console.log(enterPress);
	const keyClick = (e) => {
		enterValue(e.target.value);
	};

	const layout = [
		["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
		["a", "s", "d", "f", "g", "h", "j", "k", "l"],
		["z", "x", "c", "v", "b", "n", "m"],
	];
	const keyState = (state, key) => {
		let keyArr = state[key];
		if (!keyArr) return null;
		if (keyArr.includes("correct")) return "correct";
		if (keyArr.includes("present")) return "present";
		if (keyArr.includes("absent")) return "absent";
	};

	const handleKeyPress = (event) => {
		console.log(event);
	};

	const keyDisable = gameState === "WIN" || gameState === "LOSS";

	return (
		<KeyBoardWrapper
			onKeyPress={handleKeyPress}
			tabIndex={-1}
			style={{ "--background": currentTheme.keyBackground, "--theme": currentTheme.theme }}>
			<Row>
				{layout[0].map((el) => (
					<Button
						onClick={keyClick}
						key={el}
						value={el}
						keyState={keyState(keyboardState, el)}
						disabled={keyDisable}
						onKeyDown={handleKeyPress}
						currentTheme={currentTheme}
						theme={currentTheme.theme}>
						{el}
					</Button>
				))}
			</Row>
			<Row>
				<Spacer />

				{layout[1].map((el) => (
					<Button
						onClick={keyClick}
						key={el}
						value={el}
						keyState={keyState(keyboardState, el)}
						disabled={keyDisable}
						currentTheme={currentTheme}
						theme={currentTheme.theme}>
						{el}
					</Button>
				))}
				<Spacer />
			</Row>
			<Row>
				<Button
					onClick={() => enterClick()}
					disabled={keyDisable}
					currentTheme={currentTheme}
					theme={currentTheme.theme}>
					Enter
				</Button>
				{layout[2].map((el) => (
					<Button
						onClick={keyClick}
						key={el}
						value={el}
						keyState={keyState(keyboardState, el)}
						disabled={keyDisable}
						onKeyPress={handleKeyPress}
						currentTheme={currentTheme}
						theme={currentTheme.theme}>
						{el}
					</Button>
				))}
				<Button
					onClick={() => deleteEntry()}
					disabled={keyDisable}
					currentTheme={currentTheme}
					theme={currentTheme.theme}>
					<Delete color={currentTheme.theme === "light" ? "black" : "white"} size={24} />
				</Button>
			</Row>
		</KeyBoardWrapper>
	);
};

const KeyBoardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
	gap: 5px;
	padding: 8px;
	margin: 16px 0;
`;
const Row = styled.div`
	display: flex;
	gap: 5px;
`;
const Button = styled.button`
	height: 58px;
	font-family: inherit;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	background: var(--background);
	background: ${(p) =>
		p.keyState === "correct"
			? p.currentTheme.correct
			: p.keyState === "present"
			? p.currentTheme.present
			: p.keyState === "absent"
			? p.currentTheme.absent
			: null};
	color: ${(p) =>
		p.keyState === "correct" || p.keyState === "present" || p.keyState === "absent" || p.theme === "dark"
			? "white"
			: "black"};

	// background: #d3d6da;
	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	font-weight: 500;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
`;

const Spacer = styled.span`
	width: 10px;
`;
export default KeyBoard;
