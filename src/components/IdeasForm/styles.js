import styled from 'styled-components';
import { boxShadow, colours } from '../../tokens';

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
  background-color: ${colours.grey};
  border: 1px solid ${colours.black};
  border-radius: 0.5em;
  box-shadow: ${boxShadow};
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

export const DescriptionInput = styled.textarea`
  margin: 0;
  padding: 1em;
  width: 250px;
  height: 100px;
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
  background-color: ${colours.blue};
  border-radius: 0.5em;
  border: none;
  color: white;
  box-shadow: ${boxShadow};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${colours.darkBlue};
  }
`;

export const AddIdeaButton = styled.button`
  margin: 1em;
  padding: 0.5em;
  background-color: ${colours.blue};
  border-radius: 0.5em;
  border: none;
  color: white;
  box-shadow: ${boxShadow};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 250px;
  cursor: pointer;

  &:hover {
    background-color: ${colours.darkBlue};
  }
`;
