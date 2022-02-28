import React from "react";
import Countdown from "react-countdown";
import { msToNextHour } from "../../utils/helpers";
import styled from "styled-components";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const Timer = ({ hours, minutes, seconds, completed }) => {
	let timeToAdd = msToNextHour();
	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<Countdown date={Date.now() + timeToAdd}>
				<span>
					{minutes}:{seconds}
				</span>
			</Countdown>
		);
	}
};

export default Timer;

// ReactDOM.render(<Countdown date={Date.now() + timeToAdd} renderer={renderer} />, document.getElementById("root"));
