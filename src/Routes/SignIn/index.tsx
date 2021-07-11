import React from 'react';
import { LogoNav } from '../../Components';
import {
	LoginContainer,
	BackgroundGradient,
	FormContainer,
	Form,
	InputForm,
	SubmitButton,
} from './styles';

const SignIn: React.FC = () => (
	<div>
		<LoginContainer>
			<BackgroundGradient>
				<LogoNav />
				{/* Form */}
				<FormContainer>
					<Form>
						<h1 style={{ marginBottom: '14px', color: '#fff' }}>Sign In</h1>
						<InputForm placeholder="Email" type="email" />
						<InputForm placeholder="Password" type="password" />
						<SubmitButton type="submit">Sign In</SubmitButton>
					</Form>
				</FormContainer>
			</BackgroundGradient>
		</LoginContainer>
	</div>
);

export default SignIn;
