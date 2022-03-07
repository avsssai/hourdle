import React, { useEffect } from "react";
import { X, Share } from "react-feather";
import styled from "styled-components";
import { clipboardContent, getFromLocalStorage } from "../../utils/helpers";
import Chart from "../Chart/Chart";
import Timer from "../Timer/Timer";
import Modal from "./Modal";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Statistics = ({ isOpen, handleDismiss, gameStats }) => {
	const wins = gameStats.wins;
	const losses = gameStats.losses;
	// console.log(wins, losses);
	const percentage = wins + losses === 0 ? 0 : Math.round(((wins - losses) / (wins + losses)) * 100);
	const resultsToCopy = JSON.parse(localStorage.getItem("evaluations"));
	function copyResults(arr) {
		return clipboardContent(arr);
	}

	let copyButton;
	if (wins + losses) {
		copyButton = (
			<CopyToClipboard text={copyResults(resultsToCopy)}>
				<Button>
					Copy results <Share size={16} />
				</Button>
			</CopyToClipboard>
		);
	} else {
		copyButton = null;
	}
	let guessPercentage;

	if (wins === 0) {
		guessPercentage = <Message>Please win a game for guess chart to show.</Message>;
	} else {
		guessPercentage = (
			<>
				<Header>Guess Distribution (turns)</Header>
				<Chart />
			</>
		);
	}
	return (
		<Modal isOpen={isOpen} handleDismiss={handleDismiss}>
			<StatisticsWrapper>
				<Header>Statistics</Header>
				<CloseButton onClick={handleDismiss}>
					<X />
				</CloseButton>
				<WinPercentage>
					<Wins>Wins</Wins>
					<Percentage>Percentage</Percentage>
				</WinPercentage>
				<WinPercentage>
					<Wins>{wins}</Wins>
					<Percentage>{percentage < 0 ? 0 : percentage}%</Percentage>
				</WinPercentage>
				<GuessWrapper>{guessPercentage}</GuessWrapper>
				<TimerWrapper>
					<Header>Next Wordle in :</Header>
					<TimerStyle>
						<Timer />
					</TimerStyle>
				</TimerWrapper>
				<CopyButtonWrapper>{copyButton}</CopyButtonWrapper>
			</StatisticsWrapper>
		</Modal>
	);
};

const StatisticsWrapper = styled.div`
	position: relative;
`;
const Header = styled.h3`
	text-transform: capitalize;
	text-align: center;
	margin-bottom: 16px;
`;
const Wins = styled.span``;
const WinPercentage = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: center;
	text-align: center;
`;
const GuessWrapper = styled.div`
	margin-top: 15px;
`;
const Percentage = styled.div``;
const TimerWrapper = styled.div`
	margin: 2rem 0;
	text-align: center;
	line-height: 1.1;
`;

const TimerStyle = styled.span`
	font-size: 1.75rem;
`;

const CloseButton = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
`;

const CopyButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	background: #60d394;
	color: white;
	font-weight: 500;
	padding: 8px;
	border-radius: 10px;
`;

const Message = styled.p`
	padding: 1rem;
	text-align: center;
`;

export default Statistics;
