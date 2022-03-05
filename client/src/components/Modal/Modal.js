import React, { useContext } from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";
import { ThemeContext } from "../../hooks/ThemeContext";
const MobileBreakpoint = 550;

const Modal = ({ children, isOpen, handleDismiss }) => {
	// const [openModal, setOpenModal] = useState(true);
	const { currentTheme } = useContext(ThemeContext);
	return (
		<ModalWrapper isOpen={isOpen} onDismiss={handleDismiss}>
			<Content aria-label='Tutorial' theme={currentTheme}>
				{children}
			</Content>
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
	background: ${(p) => p.theme.background};
	color: ${(p) => p.theme.foreground};
	position: relative;
	border-radius: 10px;

	@media (max-width: ${MobileBreakpoint}px) {
		width: 80%;
	}
`;

export default Modal;
