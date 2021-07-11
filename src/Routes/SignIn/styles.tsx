import styled from 'styled-components';
import ImgBg from '../../images/hero-bg.jpg';

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

export const BackgroundGradient = styled.div`
	width: 100%;
	z-index: 1;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
`;
