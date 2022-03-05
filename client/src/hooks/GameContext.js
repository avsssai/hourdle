import React from "react";
import useStickyState from "./useStickyState";

export const GameContext = React.createContext();
const GameContextProvider = ({ children }) => {
	// const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem("gameStatus")) || "IN_PROGRESS");
	const [gameState, setGameState] = useStickyState("IN_PROGRESS", "gameStatus");
	const [statsModalOpen, setStatsModalOpen] = useStickyState(false, "statsModalOpen");
	const [firstTimeLaunch, setFirstTimeLaunch] = useStickyState(true, "firstTimeLaunch");
	return (
		<GameContext.Provider
			value={{ gameState, setGameState, statsModalOpen, setStatsModalOpen, firstTimeLaunch, setFirstTimeLaunch }}>
			{children}
		</GameContext.Provider>
	);
};
export { GameContextProvider };
