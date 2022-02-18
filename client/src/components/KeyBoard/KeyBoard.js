import React from "react";
import styled from "styled-components";
import { Delete } from "react-feather";

const KeyBoard = ({ enterValue, deleteEntry, enterClick }) => {
	const keyClick = (e) => {
		enterValue(e.target.value);
	};

	return (
		<KeyBoardWrapper>
			<Row>
				<Button onClick={keyClick} value='q'>
					q
				</Button>
				<Button onClick={keyClick} value='w'>
					w
				</Button>
				<Button onClick={keyClick} value='e'>
					e
				</Button>
				<Button onClick={keyClick} value='r'>
					r
				</Button>
				<Button onClick={keyClick} value='t'>
					t
				</Button>
				<Button onClick={keyClick} value='y'>
					y
				</Button>
				<Button onClick={keyClick} value='u'>
					u
				</Button>
				<Button onClick={keyClick} value='i'>
					i
				</Button>
				<Button onClick={keyClick} value='o'>
					o
				</Button>
				<Button onClick={keyClick} value='p'>
					p
				</Button>
			</Row>
			<Row>
				<Spacer />
				<Button onClick={keyClick} value='a'>
					a
				</Button>
				<Button onClick={keyClick} value='s'>
					s
				</Button>
				<Button onClick={keyClick} value='d'>
					d
				</Button>
				<Button onClick={keyClick} value='f'>
					f
				</Button>
				<Button onClick={keyClick} value='g'>
					g
				</Button>
				<Button onClick={keyClick} value='h'>
					h
				</Button>
				<Button onClick={keyClick} value='j'>
					j
				</Button>
				<Button onClick={keyClick} value='k'>
					k
				</Button>
				<Button onClick={keyClick} value='l'>
					l
				</Button>
				<Spacer />
			</Row>
			<Row>
				<Button onClick={keyClick} onClick={() => enterClick()}>
					Enter
				</Button>
				<Button onClick={keyClick} value='z'>
					z
				</Button>
				<Button onClick={keyClick} value='x'>
					x
				</Button>
				<Button onClick={keyClick} value='c'>
					c
				</Button>
				<Button onClick={keyClick} value='v'>
					v
				</Button>
				<Button onClick={keyClick} value='b'>
					b
				</Button>
				<Button onClick={keyClick} value='n'>
					n
				</Button>
				<Button onClick={keyClick} value='m'>
					m
				</Button>
				<Button onClick={() => deleteEntry()}>
					<Delete color='black' size={24} />
				</Button>
			</Row>
		</KeyBoardWrapper>
	);
};

const KeyBoardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
	gap: 5px;
	margin: 16px 0;
`;
const Row = styled.div`
	display: flex;
	gap: 5px;
`;
const Button = styled.button`
	height: 58px;
	font-family: inherit;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	background: #d3d6da;
	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	font-weight: 500;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
`;

const Spacer = styled.span`
	width: 10px;
`;
export default KeyBoard;
