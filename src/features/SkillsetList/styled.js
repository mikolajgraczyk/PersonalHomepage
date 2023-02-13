import styled, { css } from "styled-components";
import listEclipse from "./listEclipse.png";

export const Wrapper = styled.div`
    margin-top: 73px;
    padding: 32px;
    color: ${({ theme }) => theme.color.mineShaft};
    background: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    transition: 0.5s;
    
    ${({ darkModeEnabled }) => darkModeEnabled && css`
        background: ${({ theme }) => theme.color.lighterMineShaft};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        padding: 16px;
        margin-top: 50px;
    }  
`;

export const Title = styled.div`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 0.05em;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
    }
`;

export const List = styled.ol`
    list-style-image: url(${listEclipse});
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 8px;
    grid-column-gap: 130px;
    margin-top: 48px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileInit}px){
        grid-column-gap: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: auto;
        font-size: 14px;
        line-height: 17px;
    }
`;

export const ListElement = styled.li`
    padding-left: 16px;
    margin-left: -24px;
`;