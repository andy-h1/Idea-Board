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
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #f4d03f;
  border-radius: 5px;
  padding: 1em;
  /* width: 300px;
  height: 300px; */
`;

export const Label = styled.label`
  margin: 0.5em;
`;

export const TitleInput = styled.input`
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

export const SubmitButton = styled.button`
  margin: 1em;
  padding: 1em;
  width: 200px;
  border-radius: 5px;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
`;

export const AddButton = styled.button`
  margin: 2em 0 0 1em;
  padding: 1em;
  border-radius: 5px;
  font-family: 'Noto Sans JP', sans-serif;
  width: 200px;
  cursor: pointer;
`;
