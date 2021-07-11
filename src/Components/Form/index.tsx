import React from 'react';
import { FormContainer, InputForm, SubmitButton, FormBox } from './styles';

const Form: React.FC = () => (
	<FormContainer>
		<FormBox>
			<h1 style={{ marginBottom: '14px', color: '#fff' }}>Sign In</h1>
			<InputForm placeholder="Email" type="email" />
			<InputForm placeholder="Password" type="password" />
			<SubmitButton type="submit">Sign In</SubmitButton>
		</FormBox>
	</FormContainer>
);

export default Form;
