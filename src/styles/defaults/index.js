import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'SF Display';
    color: #323F4B;
    margin: 0;
  }

  h1 {
    font-size: 34px;
  }
`;
