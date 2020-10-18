import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 1em;
  grid-template: repeat(auto-fill, minmax(320px, 1fr)) / repeat(auto-fill, minmax(320px, 1fr));
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

export const SortLabel = styled.label`
  margin: 0 1em;
  align-self: center;
`;

export const DropDownMenu = styled.select`
  margin: 1em;
  font-family: 'Noto Sans JP', sans-serif;
`;
