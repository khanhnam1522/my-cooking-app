import React from 'react';
import {
	FormContainer,
	InputForm,
	SubmitButton,
	FormBox,
	FormTitle,
} from './styles';

const Form: React.FC = () => (
	<FormContainer>
		<FormBox>
			<FormTitle>Sign In</FormTitle>
			<InputForm placeholder="Email" type="email" />
			<InputForm placeholder="Password" type="password" />
			<SubmitButton type="submit">Sign In</SubmitButton>
		</FormBox>
	</FormContainer>
);

export default Form;
