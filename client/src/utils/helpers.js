import { words } from "../assets/words";

function getRandomWord(words) {
	let wordSelected = words[Math.floor(Math.random() * words.length + 1)];
	console.log(wordSelected);
	localStorage.setItem("solution", JSON.stringify(wordSelected));
	return wordSelected;
}

function timeout(time) {
	return setTimeout(() => getRandomWord(words), time);
}

const evaluate = (currentWord, correctWord) => {
	if (currentWord.length < 5) {
		return;
	}
	let arr = currentWord.split("");
	function status(element, index) {
		let keypairs = {};
		let correctArrSplit = correctWord.split("");
		for (let i = 0; i < correctArrSplit.length; i++) {
			let letter = correctArrSplit[i];
			if (letter in keypairs) {
				keypairs[letter] = [...keypairs[letter], i];
			} else {
				keypairs[letter] = [i];
			}
		}

		if (element in keypairs) {
			let correctLocations = keypairs[element];
			if (correctLocations.includes(index)) {
				return "correct";
			} else {
				return "present";
			}
		} else {
			return "absent";
		}
	}
	return arr.map((letter, index) => status(letter, index));
};

export { getRandomWord, timeout, evaluate };
