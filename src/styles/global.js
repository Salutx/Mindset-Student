import styled, { createGlobalStyle } from "styled-components";

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
        list-style: none;
        text-decoration: none;
    }

    body {
        width: 100vw;
        min-height: 100vh;
    }

    a {
        transition: all .3s;
        :hover {color: var(--primary-color);}
    }

    input:focus { border:none; outline: none;  }

`;

export const Content = styled.div `

    display: flex;
    width: 100%;
    height: 100vh;

`;

export const Main = styled.main `

    width: 100%;
    height: 100%;
    background-color: #F3F2F7;

`;

export const Section = styled.section `

    width: 100%;
    height: calc(100% - 51px);
    padding: 2rem;
    background-color: yellow;

`;

export default GlobalStyle;
