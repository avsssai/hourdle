import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";

const MobileBreakpoint = 550;

const Modal = ({ children, isOpen, handleDismiss }) => {
	// const [openModal, setOpenModal] = useState(true);
	return (
		<ModalWrapper isOpen={isOpen} onDismiss={handleDismiss}>
			<Content aria-label='Tutorial'>{children}</Content>
		</ModalWrapper>
	);
};

const ModalWrapper = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: hsl(0deg 0% 0% / 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Content = styled(DialogContent)`
	padding: 1rem;
	background: white;
	position: relative;
	border-radius: 10px;

	@media (max-width: ${MobileBreakpoint}px) {
		width: 80%;
	}
`;

export default Modal;
