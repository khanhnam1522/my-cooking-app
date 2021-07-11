import React from 'react';
import { LogoNav, Form } from '../../Components';
import { LoginContainer, BackgroundGradient } from './styles';

const SignIn: React.FC = () => {
	const inputFields = [
		{ placeholder: 'Email', type: 'email' },
		{ placeholder: 'Password', type: 'password' },
	];

	return (
		<div>
			<LoginContainer>
				<BackgroundGradient>
					<LogoNav />
					<Form title="Sign In" inputFields={inputFields} />
				</BackgroundGradient>
			</LoginContainer>
		</div>
	);
};

export default SignIn;
