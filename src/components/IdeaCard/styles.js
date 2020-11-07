import styled from 'styled-components';
import { boxShadow, colours } from '../../tokens';

export const CardWrapper = styled.form`
  background-color: ${colours.grey};
  border: 1px solid ${colours.black};
  border-radius: 0.5em;
  box-shadow: ${boxShadow};
  margin: 1em;
  padding: 1em;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  width: 100%;
  font-size: 1.17em;
  background-color: ${colours.grey};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 600;
  text-align: center;
  border: none;

  &:hover {
    background-color: ${colours.darkGrey};
  }
`;

export const DescriptionInput = styled.textarea`
  background-color: ${colours.grey};
  border: none;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1em;
  margin: 1em 0 0 0;
  width: 100%;
  height: 150px;

  &:hover {
    background-color: ${colours.darkGrey};
  }
`;

export const CharacterCounter = styled.p`
  color: red;
  margin: 1em 0;
  font-size: 0.8em;
`;

export const Title = styled.h3`
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  margin: 0;
`;

export const Description = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  padding: 0.5em;
  font-size: 1em;
  height: 150px;
`;

export const Time = styled.p`
  margin: 0 0 1em 0;
  font-size: 0.9em;
  font-style: italic;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  margin: 0 0.5em;
  padding: 0.5em;
  background-color: ${colours.blue};
  border-radius: 0.5em;
  border: none;
  color: ${colours.white};
  box-shadow: ${boxShadow};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${colours.darkBlue};
  }
`;

export const Label = styled.label`
  margin: 0em;
`;
