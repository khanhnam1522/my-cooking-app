import React from 'react';
import { FooterSection, FooterContainer, FooterCopyRight } from './styles';

const Footer: React.FC = () => (
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

export default Footer;
