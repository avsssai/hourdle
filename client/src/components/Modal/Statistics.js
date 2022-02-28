import React from "react";
import { X } from "react-feather";
import styled from "styled-components";
import Chart from "../Chart/Chart";
import Timer from "../Timer/Timer";
import Modal from "./Modal";

const Statistics = ({ isOpen, handleDismiss }) => {
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
					<Wins>1</Wins>
					<Percentage>100%</Percentage>
				</WinPercentage>
				<GuessWrapper>
					<Header>Guess Distribution</Header>
					<Chart />
				</GuessWrapper>
				<TimerWrapper>
					<Header>Next Wordle in :</Header>
					<TimerStyle>
						<Timer />
					</TimerStyle>
				</TimerWrapper>
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
// const ChartWrapper = styled.div`
// 	/* width: 300px;
// 	width: 300px;
// 	margin: -50px auto;
// 	display: flex;
// 	justify-content: flex-start;
// 	&:svg {
// 		position: relative;
// 		margin: 0 -16px;
// 	} */
// `;
export default Statistics;
