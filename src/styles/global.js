import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #00CDB4;
    --primary-color-dark: #426C64;
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

`;

export default GlobalStyle;