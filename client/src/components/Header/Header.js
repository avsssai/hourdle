import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { HelpCircle, BarChart2, Sun, Moon } from "react-feather";
import Tutorial from "../Modal/Tutorial";
import Statistics from "../Modal/Statistics";
import { GameContext } from "../../hooks/GameContext";
import { ThemeContext } from "../../hooks/ThemeContext";

const Header = ({ gameStats }) => {
	const { statsModalOpen, setStatsModalOpen, firstTimeLaunch, setFirstTimeLaunch } = useContext(GameContext);
	const { currentTheme, setIsDarkTheme } = useContext(ThemeContext);
	const [tutorialOpen, setTutorialOpen] = useState(false);

	const handleTutorialOpen = () => setTutorialOpen(true);
	const handleTutorialDismiss = () => setTutorialOpen(false);

	const handleStatsOpen = () => setStatsModalOpen(true);
	const handleStatsDismiss = () => setStatsModalOpen(false);
	useEffect(() => {
		if (firstTimeLaunch) {
			setTimeout(() => handleTutorialOpen(true), 1000);
			setFirstTimeLaunch(false);
		}
	}, [firstTimeLaunch, setFirstTimeLaunch]);
	const changeTheme = () => {
		if (currentTheme.theme === "light") {
			return setIsDarkTheme(true);
		} else {
			return setIsDarkTheme(false);
		}
	};

	return (
		<HeaderWrapper>
			<Menu>
				<HelpCircle color={currentTheme.foreground} size={24} onClick={handleTutorialOpen} />
			</Menu>
			<Logo style={{ color: currentTheme.correct }}>hourdle</Logo>

			<RightMenu>
				<BarChart2 color={currentTheme.foreground} size={24} onClick={handleStatsOpen} />
				{currentTheme.theme === "light" ? (
					<Moon color={currentTheme.foreground} size={24} onClick={changeTheme} />
				) : (
					<Sun color={currentTheme.foreground} size={24} onClick={changeTheme} />
				)}
			</RightMenu>
			<Tutorial isOpen={tutorialOpen} handleDismiss={handleTutorialDismiss} />
			<Statistics isOpen={statsModalOpen} handleDismiss={handleStatsDismiss} gameStats={gameStats} />
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
	margin-left: 24px;
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
