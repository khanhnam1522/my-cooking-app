import styled from 'styled-components';
import { BiSave, BiCalendar, BiCart } from 'react-icons/bi';
import { Container } from '../../../styles';

export const FeaturesContent = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
`;
export const FeaturesContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 5rem 8rem;
	color: #333333;

	${Container};
`;

export const FeaturesTitle = styled.h2`
	font-size: clamp(2rem, 8.5vw, 5rem);
	font-weight: bold;
`;

export const FeaturesCardContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 5rem;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const FeaturesCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 30rem;
	height: 30rem;
	background-color: #fff;
	box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
	border-radius: 20px;
	transition: all 0.5s ease;

	&:not(:last-child) {
		margin-right: 5rem;

		@media only screen and (min-width: 1300px) {
			margin-right: 10rem;
		}

		@media only screen and (min-width: 1500px) {
			margin-right: 20rem;
		}
		@media only screen and (max-width: 900px) {
			margin-bottom: 10rem;
			margin-right: 0;
		}
		@media only screen and (max-width: 800px) {
			box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
		}
	}

	@media only screen and (max-width: 900px) {
		width: 50rem;
	}
	@media only screen and (max-width: 500px) {
		width: 30rem;
	}
	@media only screen and (min-width: 1890px) {
		width: 40rem;
	}
	&:hover {
		box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
		transform: scale(1.05);
	}
`;

export const FeaturesIconContainer = styled.div`
	width: 9rem;
	height: 9rem;
	border-radius: 50%;
	border: 2px solid #333;
	transition: all 0.3s ease-out;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FeaturesIcon1 = styled(BiSave)`
	color: #333;
	font-size: 6rem;
`;

export const FeaturesIcon2 = styled(BiCalendar)`
	color: #333;
	font-size: 6rem;
`;
export const FeaturesIcon3 = styled(BiCart)`
	color: #333;
	font-size: 6rem;
`;

export const FeaturesCardTitle = styled.h3`
	font-size: 2.4rem;
	font-weight: bold;
	padding-top: 1rem;
`;

export const FeaturesCardText = styled.p`
	font-size: 1.8rem;
	padding: 1rem 2rem;
`;
