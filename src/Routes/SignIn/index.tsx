import React from 'react';
import { LogoNav, Form } from '../../Components';
import { LoginContainer, BackgroundGradient } from './styles';

const SignIn: React.FC = () => (
	<div>
		<LoginContainer>
			<BackgroundGradient>
				<LogoNav />
				<Form />
			</BackgroundGradient>
		</LoginContainer>
	</div>
);

export default SignIn;
