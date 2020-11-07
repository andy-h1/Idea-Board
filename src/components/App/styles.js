import { createGlobalStyle } from 'styled-components';
import { colours } from '../../tokens';

export const GlobalStyle = createGlobalStyle`

body {
 background-color: ${colours.offWhite};
 box-sizing: border-box;
 margin: 0 auto;
 font-family: 'Noto Sans JP', sans-serif;
}
`;
