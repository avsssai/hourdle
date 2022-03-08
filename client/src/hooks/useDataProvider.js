import React, { useEffect, useState } from "react";
import { words } from "../assets/words";
import { msToNextHour, setToLocalStorage, getFromLocalStorage, getWordOfHour } from "../utils/helpers";

export const UseDataContext = React.createContext();
function UseDataProvider({ children }) {
	const [word, setWord] = useState(JSON.parse(localStorage.getItem("solution")));

	const [timeTill, setTimeTill] = useState(msToNextHour());

	useEffect(() => {
		let word = getWordOfHour(words);
		setWord(word);
		localStorage.setItem("solution", JSON.stringify(word));
		const expiryTime = getFromLocalStorage("gameResetTime");
		let timeNow = Date.now();
		let timeToNextExpiry = timeNow + msToNextHour();
		if (!expiryTime) setToLocalStorage("gameResetTime", timeToNextExpiry);

		if (expiryTime) {
			if (expiryTime < timeNow) {
				localStorage.removeItem("evaluations");
				localStorage.removeItem("boardState");
				localStorage.removeItem("keyboardState");
				localStorage.removeItem("gameStatus");
				localStorage.removeItem("rowIndex");
				setToLocalStorage("gameStatus", "IN_PROGRESS");

				window.location.reload();
				let newExpiryTime = timeNow + msToNextHour();
				setToLocalStorage("gameResetTime", newExpiryTime);
			}
		}
	}, []);
	useEffect(() => {
		let interval = setInterval(() => {
			let word = getWordOfHour(words);
			setWord(word);
			localStorage.setItem("solution", JSON.stringify(word));

			localStorage.removeItem("evaluations");
			localStorage.removeItem("boardState");
			localStorage.removeItem("keyboardState");
			localStorage.removeItem("gameStatus");
			localStorage.removeItem("rowIndex");
			setToLocalStorage("gameStatus", "IN_PROGRESS");
			window.location.reload();
		}, timeTill);
		return () => clearInterval(interval);
	}, [timeTill]);

	// return [word, timeTill];
	return <UseDataContext.Provider value={{ word, timeTill }}>{children}</UseDataContext.Provider>;
}

export default UseDataProvider;
