import React from "react";
import styled from "styled-components";
import { Delete } from "react-feather";

const KeyBoard = ({ enterValue, deleteEntry, enterClick, keyboardState }) => {
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
	return (
		<KeyBoardWrapper>
			<Row>
				{layout[0].map((el) => (
					<Button onClick={keyClick} key={el} value={el} keyState={keyState(keyboardState, el)}>
						{el}
					</Button>
				))}
			</Row>
			<Row>
				<Spacer />

				{layout[1].map((el) => (
					<Button onClick={keyClick} key={el} value={el} keyState={keyState(keyboardState, el)}>
						{el}
					</Button>
				))}
				<Spacer />
			</Row>
			<Row>
				<Button onClick={() => enterClick()}>Enter</Button>
				{layout[2].map((el) => (
					<Button onClick={keyClick} key={el} value={el} keyState={keyState(keyboardState, el)}>
						{el}
					</Button>
				))}
				<Button onClick={() => deleteEntry()}>
					<Delete color='black' size={24} />
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
	background: ${(p) =>
		p.keyState === "correct"
			? "green"
			: p.keyState === "present"
			? "yellow"
			: p.keyState === "absent"
			? "gray"
			: "#d3d6da"};
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
