import { useEffect, useState } from "react";
import { msToNextHour, setToLocalStorage } from "../utils/helpers";

function useData() {
	let [lastPlayedTS, setlastPlayedTS] = useState(JSON.parse(localStorage.getItem("lastPlayedTS")) || null);
	let [lastCompletedTS, setlastCompletedTS] = useState(JSON.parse(localStorage.getItem("lastCompletedTS")) || null);

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
				});
		}, timeTill);
		return () => clearInterval(interval);
	}, [timeTill]);

	// let exists = (item) => {
	// 	if (localStorage.getItem(item)) {
	// 		JSON.parse(localStorage.getItem(item));
	// 	} else {
	// 		return null;
	// 	}
	// };
	// useEffect(() => {
	// 	if (!exists("game-stats"))
	// 		localStorage.setItem("game-stats", JSON.stringify({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }));

	// 	if (!exists("wins")) localStorage.setItem("wins", JSON.stringify(0));
	// 	if (!exists("losses")) localStorage.setItem("losses", JSON.stringify(0));
	// 	if (!exists("boardState")) localStorage.setItem("boardState", JSON.stringify(["", "", "", "", "", ""]));
	// 	if (!exists("evaluations")) setToLocalStorage("evaluations", Array(6).fill([]));
	// 	if (!exists("rowIndex")) setToLocalStorage("rowIndex", 0);
	// });
	return [word, timeTill];
}

export default useData;

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
