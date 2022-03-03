import React, { useEffect, useState } from "react";
import { msToNextHour, setToLocalStorage } from "../utils/helpers";

export const UseDataContext = React.createContext();
function UseDataProvider({ children }) {
	const [word, setWord] = useState(JSON.parse(localStorage.getItem("solution")));

	const [timeTill, setTimeTill] = useState(msToNextHour());

	useEffect(() => {
		fetch("http://localhost:8000/")
			.then((res) => res.json())
			.then((data) => {
				setWord(data.word);
				localStorage.setItem("solution", JSON.stringify(data.word));
			});
	}, []);
	useEffect(() => {
		let interval = setInterval(() => {
			console.log(msToNextHour(), new Date().getTime());
			setTimeTill(msToNextHour());
			// console.log(timeToNextMin());
			// setTimeTill(timeToNextMin());
			fetch("http://localhost:8000/")
				.then((res) => res.json())
				.then((data) => {
					setWord(data.word);

					return localStorage.setItem("solution", JSON.stringify(data.word));
				})
				.then(() => {
					localStorage.removeItem("evaluations");
					localStorage.removeItem("boardState");
					localStorage.removeItem("keyboardState");
					localStorage.removeItem("gameStatus");
					localStorage.removeItem("rowIndex");
					window.location.reload();
				});
		}, timeTill);
		return () => clearInterval(interval);
	}, [timeTill]);

	// return [word, timeTill];
	return <UseDataContext.Provider value={{ word, timeTill }}>{children}</UseDataContext.Provider>;
}

export default UseDataProvider;

// useEffect(() => {
// 	// const timeUntilNextMin = Math.abs(moment().diff(moment().endOf("minute").add(100, "ms"), "ms"));
// 	// let currentTime = moment();
// 	// let endOfMin = moment().endOf("minute");
// 	// const timeUntilNextMin = endOfMin.diff(currentTime, "ms");
// 	// function msToNextHour() {
// 	// 	return 3600000 - (new Date().getTime() % 3600000);
// 	// }
// 	// console.log("runs 2");
// 	// console.log(msToNextHour());
// 	// const timeout = setTimeout(() => {
// 	// 	fetch("http://localhost:8000/")
// 	// 		.then((res) => res.json())
// 	// 		.then((data) => {
// 	// 			setWord(data.word);
// 	// 			console.log("word generated - ", data.word);
// 	// 			return localStorage.setItem("cron-test", JSON.stringify(data.word));
// 	// 		});
// 	// }, msToNextHour());

// 	// return () => clearTimeout(timeout);
// 	let timeNow = new Date();
// 	let timeTillNextMin = 60000 - (timeNow.getSeconds() * 1000 + timeNow.getMilliseconds());
// 	console.log(timeTillNextMin);

// 	let timeout1 = setInterval(() => console.log("shiva", timeTillNextMin), timeTillNextMin);
// 	return () => clearInterval(timeout1);
// });
