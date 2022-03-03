import React, { useContext, useState } from "react";
import useStickyState from "./useStickyState";

export const GameContext = React.createContext();
const GameContextProvider = ({ children }) => {
	// const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem("gameStatus")) || "IN_PROGRESS");
	const [gameState, setGameState] = useStickyState("IN_PROGRESS", "gameStatus");

	return <GameContext.Provider value={{ gameState, setGameState }}>{children}</GameContext.Provider>;
};
export { GameContextProvider };
