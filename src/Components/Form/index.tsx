import React from 'react';
import {
	FormContainer,
	InputForm,
	SubmitButton,
	FormBox,
	FormTitle,
} from './styles';

interface FormProps {
	title: string;
	inputFields: { placeholder: string; type: string }[];
}

const Form: React.FC<FormProps> = ({ title, inputFields }) => (
	<FormContainer>
		<FormBox>
			<FormTitle>{title}</FormTitle>
			{inputFields.map((inputField) => (
				<InputForm
					placeholder={inputField.placeholder}
					type={inputField.type}
				/>
			))}
			<SubmitButton type="submit">{title}</SubmitButton>
		</FormBox>
	</FormContainer>
);

export default Form;
