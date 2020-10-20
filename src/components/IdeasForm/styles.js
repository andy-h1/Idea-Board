import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  background-color: #fdd835;
  border: 1px solid #90a4ae;
  border-radius: 0.5em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  margin: 1em;
  padding: 1em;
  width: 300px;
  height: 300px;
`;

export const Label = styled.label`
  margin: 1em;
`;

export const TitleInput = styled.input`
  margin: 0;
  padding: 1em;
  width: 250px;
  height: auto;
  font-family: 'Noto Sans JP', sans-serif;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  width: 250px;
  height: auto;
  font-family: 'Noto Sans JP', sans-serif;
`;

export const CharacterCounter = styled.p`
  color: red;
  margin: 1em 0;
  font-size: 0.8em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Button = styled.button`
  margin: 0 0.5em;
  padding: 0.5em;
  background-color: #2980b9;
  border-radius: 0.5em;
  border: none;
  color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
`;

export const AddIdeaButton = styled.button`
  margin: 1em;
  padding: 0.5em;
  background-color: #2980b9;
  border-radius: 0.5em;
  border: none;
  color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 250px;
  cursor: pointer;
`;
