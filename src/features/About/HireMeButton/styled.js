import styled, { css } from "styled-components";

export const Button = styled.button`
    width: 154px;
    height: 49px;
    background: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    margin-top: 32px;
    transition: 0.5s;

    &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, 
        -2px 2px 0px #8CC2FF, 
        2px 2px 0px #8CC2FF, 
        -2px -2px 0px #8CC2FF;
        cursor: pointer;
    }

    &:active{
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        background: ${({ theme }) => theme.color.dodgerBlue};

        &:hover {
        box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;
        }
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        gap: 12px;
        width: 138px;
        height: 46px;
        margin-top: 24px;
    }
`;

export const ImageSection = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 20px;
        height: 20px;
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;