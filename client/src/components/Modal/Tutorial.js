import React from "react";
import { X } from "react-feather";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import Modal from "./Modal";

const Tutorial = ({ isOpen, handleDismiss }) => {
	return (
		<Modal isOpen={isOpen} handleDismiss={handleDismiss}>
			<TutorialWrapper>
				<Heading>HOW TO PLAY</Heading>
				<CloseButton onClick={handleDismiss}>
					<X />
				</CloseButton>
				<Rules>
					<Rule>Guess the WORDLE in six tries.</Rule>
					<Rule>Each guess must be a valid five-letter word. Hit the enter button to submit.</Rule>
					<Rule>
						After each guess, the color of the tiles will change to show how close your guess was to the
						word.
					</Rule>
				</Rules>
				<SectionDivider />
				<Examples>
					<SectionHeader>Examples</SectionHeader>
					<Example>
						<Row>
							<Cell entry='S' evaluation='correct' />
							<Cell entry='H' />
							<Cell entry='I' />
							<Cell entry='V' />
							<Cell entry='A' />
						</Row>
						<Rule>The letter S is in the word and in the correct spot.</Rule>
					</Example>

					<Example>
						<Row>
							<Cell entry='P' />
							<Cell entry='I' evaluation='present' />
							<Cell entry='L' />
							<Cell entry='L' />
							<Cell entry='S' />
						</Row>
						<Rule>The letter I is in the word but in the wrong spot.</Rule>
					</Example>

					<Example>
						<Row>
							<Cell entry='V' />
							<Cell entry='A' />
							<Cell entry='G' />
							<Cell entry='U' evaluation='absent' />
							<Cell entry='E' />
						</Row>
						<Rule>The letter U is not in the word in any spot.</Rule>
					</Example>
				</Examples>
				<SectionDivider />

				<SectionHeader>A new WORDLE will be available each hour!</SectionHeader>
			</TutorialWrapper>
		</Modal>
	);
};

const TutorialWrapper = styled.div`
	position: relative;
`;
const CloseButton = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
`;
const Heading = styled.h4`
	text-transform: capitalize;
	text-align: center;
	margin-bottom: 16px;
`;
const SectionHeader = styled.h5`
	margin: 10px 0;
`;
const Example = styled.div`
	margin: 16px 0;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 5px;
	/* width: 348px; */
	justify-content: flex-start;
`;
const Rules = styled.section``;
const Rule = styled.p`
	margin: 10px 0;
	font-size: 0.825rem;
	font-weight: 500;
`;
const Examples = styled.section``;
const SectionDivider = styled.p`
	border: 1px solid #ced4da;
`;

export default Tutorial;
