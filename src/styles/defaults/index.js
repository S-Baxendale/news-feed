import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SF Display";
    font-weight: 900;
    src: url("https://sf.abarba.me/SF-UI-Display-Black.otf");
  }

  /** Bold */
  @font-face {
    font-family: "SF Display";
    font-weight: 700;
    src: url("https://sf.abarba.me/SF-UI-Display-Bold.otf");
  }

  /** Heavy */
  @font-face {
    font-family: "SF Display";
    font-weight: 800;
    src: url("https://sf.abarba.me/SF-UI-Display-Heavy.otf");
  }

  /** Light */
  @font-face {
    font-family: "SF Display";
    font-weight: 200;
    src: url("https://sf.abarba.me/SF-UI-Display-Light.otf");
  }

  /** Medium */
  @font-face {
    font-family: "SF Display";
    font-weight: 500;
    src: url("https://sf.abarba.me/SF-UI-Display-Medium.otf");
  }

  /** Regular */
  @font-face {
    font-family: "SF Display";
    font-weight: 400;
    src: url("https://sf.abarba.me/SF-UI-Display-Regular.otf");
  }

  /** Semibold */
  @font-face {
    font-family: "SF Display";
    font-weight: 600;
    src: url("https://sf.abarba.me/SF-UI-Display-Semibold.otf");
  }

  /** Thin */
  @font-face {
    font-family: "SF Display";
    font-weight: 300;
    src: url("https://sf.abarba.me/SF-UI-Display-Thin.otf");
  }

  /** Ultralight */
  @font-face {
    font-family: "SF Display";
    font-weight: 100;
    src: url("https://sf.abarba.me/SF-UI-Display-Ultralight.otf");
  }
  
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
