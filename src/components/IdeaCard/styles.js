import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fdd835;
  border: 1px solid #90a4ae;
  border-radius: 0.5em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  margin: 1em;
  padding: 1em;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  width: 100%;
  background-color: #fdd835;
  font-size: 1.17em;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 600;
  text-align: center;
  border: 1px solid #eee;
`;

export const DescriptionInput = styled.textarea`
  background-color: #fdd835;
  border: 1px solid #eee;
  font-family: 'Caveat', cursive;
  font-size: 1.4em;
  margin: 1em 0 0 0;
  width: 100%;
  height: 150px;
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
  font-family: 'Caveat', cursive;
  font-size: 1.4em;
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

export const Label = styled.label`
  margin: 0em;
`;