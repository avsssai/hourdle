import express from "express";
import nodeCron from "node-cron";
import cors from "cors";

import { words as wordsList } from "./words.js";

const random = (words) => {
	return words[Math.floor(Math.random() * words.length - 1)];
};

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
let usedWords = [];
let newWord = random(wordsList);
if (!wordsList.length) {
	wordsList = usedWords;
	usedWords = [];
}
nodeCron.schedule("0 * * * *", function () {
	newWord = random(wordsList);
	if (usedWords.includes(newWord)) {
		newWord = random(wordsList);
	}
	usedWords.push(newWord);
	console.log("generating a new word - " + newWord);
});

app.get("/", (req, res) => {
	res.json({ word: newWord, usedWords });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
