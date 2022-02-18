import { useEffect, useState } from "react";
import { words } from "../assets/words";

function useRandomWord() {
	const [word, setWord] = useState(JSON.parse(localStorage.getItem("solution")) || "shiva");
	const [lastPlayed, setLastPlayed] = useState(JSON.parse(localStorage.getItem("lastPlayedTS")) || null);
	const [lastCompleted, setLastCompleted] = useState(JSON.parse(localStorage.getItem("lastCompletedTS")) || null);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			let wordSelected = words[Math.floor(Math.random() * words.length + 1)];
			setWord(wordSelected);
			console.log(wordSelected);
			localStorage.setItem("solution", JSON.stringify(wordSelected));
			localStorage.setItem("lastPlayedTS", null);
			localStorage.setItem("lastCompletedTS", null);
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return [word];
}

export { useRandomWord };
