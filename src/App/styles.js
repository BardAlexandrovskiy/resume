import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
    background-color: transparent;
    word-wrap: break-word;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  html, body, #root {
    height: 100%;
  }

  body {
    min-width: 320px;
  }

  .active {
    background-color: rgba(94, 210, 184, 0.5);
  }
`;
