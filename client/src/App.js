import "./App.css";
import { GameContextProvider } from "./hooks/GameContext";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import styled from "styled-components";
import useStickyState from "./hooks/useStickyState";
import UseDataProvider from "./hooks/useDataProvider";
import { useContext } from "react";
import { ThemeContext } from "./hooks/ThemeContext";
import Div100vh from "react-div-100vh";

const initialGameState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, wins: 0, losses: 0 };
function App() {
	const [gameStats, setGameStats] = useStickyState(initialGameState, "gameStats");
	const { currentTheme } = useContext(ThemeContext);
	return (
		<Div100vh>
			<GameContextProvider>
				<AppWrapper currentTheme={currentTheme}>
					<Header gameStats={gameStats} currentTheme={currentTheme} />
					<UseDataProvider>
						<GameWrapper>
							<Game setGameStats={setGameStats} gameStats={gameStats} currentTheme={currentTheme} />
						</GameWrapper>
					</UseDataProvider>
				</AppWrapper>
			</GameContextProvider>
		</Div100vh>
	);
}

const AppWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${(p) => p.currentTheme.background};
`;

const GameWrapper = styled.div`
	height: 90%;
`;

export default App;
