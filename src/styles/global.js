import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #00CDB4;
    --primary-color-dark: #426C64;
    --primary-color-opacity: #F9FDFD;
    --secundary-color: #9799B0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}

body {
    width: 100vw;
    min-height: 100vh;
}

a {
    transition: all .3s;
    :hover {color: var(--primary-color);}
}

`;

export default GlobalStyle;