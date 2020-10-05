import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  text-transform: capitalize;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin: 0.5em;
`;

export const TitleInput = styled.input`
  padding: 1em;
  width: 250px;
  height: auto;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  width: 250px;
  height: auto;
`;

export const SubmitButton = styled.button`
  margin: 1em;
  padding: 1em;
  width: 200px;
  border-radius: 5px;
`;