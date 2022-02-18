import "./App.css";
import { useRandomWord } from "./hooks/useRandomWord";
import useData from "./hooks/useData";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import styled from "styled-components";

function App() {
	const [word] = useData();

	return (
		<AppWrapper>
			<Header></Header>
			<GameWrapper>
				<Game word={word} />
			</GameWrapper>
		</AppWrapper>
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
