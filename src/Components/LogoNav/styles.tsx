import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';
import { Container } from '../../styles';

export const NavLogo = styled(Link)`
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 2.5rem;
	font-weight: 800;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.08);
	}
`;

export const NavIcon = styled(BiRestaurant)`
	margin-right: 0.8rem;
	transition: all 0.5s ease;

	&:hover {
		transform: scale(2);
	}
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	${Container};
`;
