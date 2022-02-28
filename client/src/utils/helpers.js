import { words } from "../assets/words";
import { validWords } from "../assets/validWords";
import moment from "moment";

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

function timeToNextMin() {
	// let timeNow = new Date();
	// return 62000 - (timeNow.getSeconds() * 1000 + timeNow.getMilliseconds());
	return Math.abs(moment().diff(moment().endOf("minute").add(100, "ms"), "ms"));
}

function msToNextHour() {
	return Math.abs(moment().diff(moment().endOf("hour").add(2000, "ms"), "ms"));
}

function toastMessage(chance) {
	let messages = ["Genius!", "Splendid", "Amazing", "Good", "Nice", "You did it", "Too bad!"];
	return messages[chance];
}

function binarySearch(arr, val) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === val) {
			return mid;
		}

		if (val < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

function isWordInList(word) {
	return words.includes(word) || validWords.includes(word);
}

function getFromLocalStorage(item) {
	return JSON.parse(localStorage.getItem(item));
}

function setToLocalStorage(item, content) {
	return localStorage.setItem(item, JSON.stringify(content));
}
export {
	getRandomWord,
	timeout,
	evaluate,
	timeToNextMin,
	msToNextHour,
	toastMessage,
	binarySearch,
	isWordInList,
	getFromLocalStorage,
	setToLocalStorage,
};
