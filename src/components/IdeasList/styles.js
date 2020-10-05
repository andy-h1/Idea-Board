import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 0;
  border: 1px solid black;

  @media (min-width: 597px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(300px, auto);
    grid-auto-flow: column;
  }
`;

export const List = styled.ul`
  list-style: none;
`;
