import styled from "styled-components";

export const Content = styled.div`

    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    max-width: 350px;
    padding: 1.3rem;
    border-radius: 6px;

`;

export const Label = styled.label `

    font-size: 18px;
    font-weight: bold;
    color: #676767;

`;

export const LabelError = styled.label `

    font-size: 14px;
    color: red;

`;

export const Strong = styled.strong `

    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }

`;