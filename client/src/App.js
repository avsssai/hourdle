import "./App.css";
import { GameContextProvider } from "./hooks/GameContext";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import styled from "styled-components";
import useStickyState from "./hooks/useStickyState";
import UseDataProvider from "./hooks/useDataProvider";

const initialGameState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

function App() {
	const [gameStats, setGameStats] = useStickyState(initialGameState, "gameStats");
	return (
		<GameContextProvider>
			<AppWrapper>
				<Header gameStats={gameStats} />
				<UseDataProvider>
					<GameWrapper>
						<Game setGameStats={setGameStats} gameStats={gameStats} />
					</GameWrapper>
				</UseDataProvider>
			</AppWrapper>
		</GameContextProvider>
	);
}

const AppWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const GameWrapper = styled.div`
	height: 90%;
`;

export default App;
