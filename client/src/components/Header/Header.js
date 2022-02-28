import React, { useState } from "react";
import styled from "styled-components";
import { HelpCircle, BarChart2, Settings } from "react-feather";
import Tutorial from "../Modal/Tutorial";
import Statistics from "../Modal/Statistics";

const Header = () => {
	const [tutorialOpen, setTutorialOpen] = useState(false);
	const [statsModalOpen, setStatsModalOpen] = useState(false);

	const handleTutorialOpen = () => setTutorialOpen(true);
	const handleTutorialDismiss = () => setTutorialOpen(false);

	const handleStatsOpen = () => setStatsModalOpen(true);
	const handleStatsDismiss = () => setStatsModalOpen(false);
	return (
		<HeaderWrapper>
			<Menu>
				<HelpCircle color='black' size={24} onClick={handleTutorialOpen} />
			</Menu>
			<Logo>Wordle</Logo>

			<RightMenu>
				<BarChart2 color='black' size={24} onClick={handleStatsOpen} />
				<Settings color='black' size={24} />
			</RightMenu>
			<Tutorial isOpen={tutorialOpen} handleDismiss={handleTutorialDismiss} />
			<Statistics isOpen={statsModalOpen} handleDismiss={handleStatsDismiss} />
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
	display: flex;
	padding: 0rem 1rem;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid black;
	justify-content: space-between;
`;

const Logo = styled.span`
	/* margin: 0 auto; */
	font-family: "Bungee Inline", cursive;
	color: #538d4e;
	font-size: 2rem;
	pointer-events: none;
`;
const Menu = styled.span`
	cursor: pointer;
`;

const RightMenu = styled.span`
	cursor: pointer;
	display: flex;
	gap: 5px;
`;

export default Header;
