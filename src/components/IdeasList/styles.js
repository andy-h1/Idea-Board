import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1em;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid black;
  display: grid;
  grid-gap: 1em;
  grid-template: repeat(auto-fill, minmax(300px, 1fr)) / repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr)); */
  place-items: center;
  place-content: space-around;
`;

export const TextWrapper = styled.div`
  margin: 1em;
  text-align: center;
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
`;
