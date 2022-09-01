import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #00CDB4;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}

body {
    width: 100vw;
    height: 100vh;
}

`;

export default GlobalStyle;