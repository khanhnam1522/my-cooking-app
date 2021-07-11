import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';
import { Container } from '../../styles';
import ImgBg from '../../images/login-bg.jpg';

export const LoginContainer = styled.div`
	background-image: linear-gradient(
			to top right,
			rgba(11, 10, 10, 0.38),
			rgba(11, 10, 10, 0.19)
		),
		url(${ImgBg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
`;

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

export const BackgroundGradient = styled.div`
	width: 100%;
	z-index: 1;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
`;

export const FormContainer = styled.div`
	position: absolute;
	top: 30%;
	width: 450px;
	padding: 70px;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(0, 0, 0, 0.85);
	left: 0;
	right: 0;
`;

export const Form = styled.form`
	display: grid;
	flex-direction: column;
`;

export const InputForm = styled.input`
	outline-width: 0;
	height: 40px;
	margin-bottom: 14px;
	border-radius: 5px;
	border: none;
	padding: 5px 15px;
`;

export const SubmitButton = styled.button`
	padding: 16px 20px;
	color: #fff;
	border-radius: 5px;
	background-color: #e50914;
	cursor: pointer;
	border: none;
	margin-top: 20px;
`;
