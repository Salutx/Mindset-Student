import styled from "styled-components";

export const Header = styled.header `

    height: 51px;
    background-color: white;

`

export const Container = styled.div `

    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

`;

export const Navbar = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    
`;

export const Breadcrumb = styled.div `

    display: flex;
    align-items: center;
    gap: .3rem;
    font-size: .8rem;
    color: var(--secundary-color);
    flex: 0 0 25%;

    p:last-child {color: var(--primary-color);}

`;

export const SearchContainer = styled.div `

    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 0 0 60%;

`;

export const NavbarSearch = styled.div `

    display: flex;
    align-items: center;
    background-color: #F3F2F7;
    padding: .4rem;
    border-radius: 4px;
    overflow: hidden;
    gap: .5rem;
    color: var(--secundary-color);

    a {
        padding: 0 .2rem;
        cursor: pointer;
        display: flex;
    }

    input {
        border: none;
        background-color: transparent;
        font-size: .7rem;
        width: 300px;
    }

    input::placeholder {
        font-size: .7rem;
        color: var(--secundary-color);
    }

`;

export const NavbarTools = styled.div `

    display: flex;
    align-items: center;
    gap: .8rem;
    color: var(--secundary-color);

    a {
        cursor: pointer; 
        font-size: 16px;
        display: flex;
        align-items: center
    }

`;

export const NavbarLogout = styled.div `

    flex: 0 0 0;

    a {
        font-size: .8rem;
        display: flex;
        align-items: center;
        gap: .3rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--secundary-color);
    }

`;
