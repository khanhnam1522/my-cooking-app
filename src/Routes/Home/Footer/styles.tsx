import styled from 'styled-components';
import { Container } from '../../../styles';

export const FooterSection = styled.section`
	display: flex;
	align-items: center;
	color: #fff;
	background-color: #333;
`;

export const FooterContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem 0rem;
	${Container}
`;

export const FooterCopyRight = styled.div`
	text-decoration: none;
	outline: none;
	color: #fff;
`;
