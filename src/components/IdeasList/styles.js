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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  
  @media (min-width: 597px) {
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr); */
  }
`;
