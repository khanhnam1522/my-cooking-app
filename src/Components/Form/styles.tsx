import styled from 'styled-components';

export const FormContainer = styled.div`
	position: absolute;
	top: 30%;
	width: 450px;
	padding: 70px;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(0, 0, 0, 0.85);
	left: 0;
	right: 0;
`;

export const FormBox = styled.form`
	display: grid;
	flex-direction: column;
`;

export const FormTitle = styled.h1`
	margin-bottom: 14px;
	color: #fff;
`;

export const InputForm = styled.input`
	outline-width: 0;
	height: 40px;
	margin-bottom: 14px;
	border-radius: 5px;
	border: none;
	padding: 5px 15px;
`;

export const SubmitButton = styled.button`
	padding: 16px 20px;
	color: #fff;
	border-radius: 5px;
	background-color: #e50914;
	cursor: pointer;
	border: none;
	margin-top: 20px;
`;
