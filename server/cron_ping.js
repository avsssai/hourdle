import nodeCron from "node-cron";

nodeCron.schedule("* * * * * *", function () {
	window.localStorage.setItem("random", JSON.stringify("shiva"));
	console.log("running a task every minute");
});
