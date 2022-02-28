import "./App.css";
// import { useRandomWord } from "./hooks/useRandomWord";
import useData from "./hooks/useData";
import { GameContextProvider } from "./hooks/GameContext";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import styled from "styled-components";
import useStickyState from "./hooks/useStickyState";

const initialGameState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

function App() {
	const [word] = useData();
	const [gameStats, setGameStats] = useStickyState(initialGameState, "gameStats");
	return (
		<GameContextProvider>
			<AppWrapper>
				<Header gameStats={gameStats} />
				<GameWrapper>
					<Game word={word} setGameStats={setGameStats} gameStats={gameStats} />
				</GameWrapper>
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
