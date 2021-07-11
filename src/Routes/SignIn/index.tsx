import React from 'react';
import {
	LoginContainer,
	NavLogo,
	NavIcon,
	NavbarContainer,
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
					{/* Simple Nav */}
					<NavbarContainer>
						<NavLogo to="/">
							<NavIcon />
							Home Made
						</NavLogo>
					</NavbarContainer>

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
