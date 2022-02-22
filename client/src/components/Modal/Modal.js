import React from "react";
import styled from "styled-components";

const Modal = () => {
	return (
		<ModalWrapper>
			<Header>Statistics</Header>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	position: absolute;
	height: 30%;
	width: 30%;
	text-align: center;
	padding: 10px;
`;
const Header = styled.div`
	font-size: 24px;
`;
export default Modal;
