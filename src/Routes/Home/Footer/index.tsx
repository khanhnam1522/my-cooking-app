import { FooterSection, FooterContainer, FooterCopyRight } from './styles';
const Footer: React.FC = () => {
	return (
		<div>
			<FooterSection>
				<FooterContainer>
					<FooterCopyRight>
						&copy; Copyright 2021, Crafted with ♥ by Nam Tang.
					</FooterCopyRight>
				</FooterContainer>
			</FooterSection>
		</div>
	);
};

export default Footer;
