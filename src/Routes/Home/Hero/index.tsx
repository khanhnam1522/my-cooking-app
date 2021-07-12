import React from 'react';
import { Navbar } from '../../../Components';
import { Button } from '../../../styles';
import {
	HeroContainer,
	HeroContent,
	HeroContentText,
	HeroTitle,
	HeroTitleText,
	HeroSubTitle,
	HeroText,
	HeroBtn,
} from './styles';

const Hero: React.FC = () => (
	<div>
		<HeroContainer>
			<Navbar />
			<HeroContent>
				<HeroContentText>
					<HeroTitle>
						<HeroTitleText>All Your Food</HeroTitleText>
						<HeroTitleText>One Place</HeroTitleText>
					</HeroTitle>
					<HeroSubTitle>For a better life</HeroSubTitle>
					<HeroText>
						Save and organize your favorite recipes in one place. Create meal
						plans, and generate grocery lists. We make cook&apos;s life easier
					</HeroText>
				</HeroContentText>
				<HeroBtn to="/signIn">
					<Button primary big bigFont bigRadius>
						Get Started
					</Button>
				</HeroBtn>
			</HeroContent>
		</HeroContainer>
	</div>
);

export default Hero;
