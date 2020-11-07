import styled from 'styled-components';
import { colours } from '../../tokens';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  font-family: 'Noto Sans JP', sans-serif;
  border: 1px solid ${colours.black};
  background-color: ${colours.grey};
  margin: 1em;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 0em;
`;
