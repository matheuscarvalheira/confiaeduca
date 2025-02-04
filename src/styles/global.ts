import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --toastify-color-error: ${({theme}) => theme.begonia};
    --toastify-color-warning: ${({theme}) => theme.begonia};
    --toastify-color-success: ${({theme}) => theme.greenScreamin};
    --toastify-color-info: ${({theme}) => theme.cultured};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.indigoLavander};
    border-radius: 20px;

    &:hover {
      background-color: ${({theme}) => theme.indigoLavander};
    }
  }

  html, body, #_next {
    height: 100%;
  }

  html, body, #__next, main {
    height: 100%;
  }

  main {
    overflow-y: auto;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }
`