import React from 'react';
import { auth } from '../../api/firebase';
import {
	FormContainer,
	InputForm,
	SubmitButton,
	FormBox,
	FormTitle,
	SubTitleContainer,
	SubTitle,
	SubLink,
} from './styles';

interface FormProps {
	title: string;
	inputFields: { placeholder: string; type: string }[];
}

const Form: React.FC<FormProps> = ({ title, inputFields }) => {
	const signUp = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword('khanhnam1522@gmail.com', 'abcd')
			.then((authUser) => {
				console.log('***authUser', authUser);
			})
			.catch((error) => {
				console.log('***error', error);
			});
	};

	return (
		<FormContainer>
			<FormBox>
				<FormTitle>{title}</FormTitle>
				{inputFields.map((inputField) => (
					<InputForm
						placeholder={inputField.placeholder}
						type={inputField.type}
						key={inputField.placeholder}
					/>
				))}
				<SubmitButton type="submit">{title}</SubmitButton>
				<SubTitleContainer>
					<SubTitle>New to Netflix? </SubTitle>
					<SubLink onClick={signUp}>Sign Up now.</SubLink>
				</SubTitleContainer>
			</FormBox>
		</FormContainer>
	);
};

export default Form;
