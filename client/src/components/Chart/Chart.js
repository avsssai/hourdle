import React from "react";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
	// const dataThing = [
	// 	{ title: "1", value: 1, color: "#E38627" },
	// 	{ title: "2", value: 2, color: "#C13C37" },
	// 	{ title: "3", value: 0, color: "#6A2135" },
	// 	{ title: "4", value: 5, color: "#f6bd60" },
	// 	{ title: "5", value: 14, color: "#f28482" },
	// 	{ title: "6", value: 40, color: "#83c5be" },
	// ];
	const data = JSON.parse(localStorage.getItem("gameStats")) || null;
	const dataThing = [
		{ title: "1", value: data["1"], color: "#E38627" },
		{ title: "2", value: data["2"], color: "#C13C37" },
		{ title: "3", value: data["3"], color: "#6A2135" },
		{ title: "4", value: data["4"], color: "#f6bd60" },
		{ title: "5", value: data["5"], color: "#f28482" },
		{ title: "6", value: data["6"], color: "#83c5be" },
	];

	let firstTimePlaying = Object.values(data).reduce((acc, el) => acc + el, 0);

	if (!firstTimePlaying) {
		return <Text>No data</Text>;
	} else {
		return (
			<PieChart
				data={dataThing}
				lineWidth={20}
				paddingAngle={18}
				rounded
				animate
				label={({ dataEntry }) => dataEntry.title}
				labelStyle={(index) => ({
					fill: dataThing[index].color,
					fontSize: "5px",
					fontFamily: "sans-serif",
				})}
				labelPosition={60}
			/>
		);
	}
};

const Text = styled.p`
	text-align: center;
`;

export default Chart;
