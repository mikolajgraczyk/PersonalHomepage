import styled, { css } from "styled-components";
import { ReactComponent as ListEllipse } from "./ListEllipse.svg"

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
    padding-bottom: 15px;
    border-bottom: 1px ${({ theme }) => theme.color.ironOpacity30} solid;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
        border-bottom: 1px ${({ theme }) => theme.color.ironOpacity10} solid;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
        padding-bottom: 12px;
    }
`;

export const StyledListEllipse = styled(ListEllipse)`
    color: ${({theme}) => theme.color.scienceBlue};

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({theme}) => theme.color.dodgerBlue};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 6px;
    }
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    grid-column-gap: 115px;
    margin-top: 32px;
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
        margin-top: 12px;
    }
`;

export const Element = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: left;
    align-items: center;
    grid-gap: 16px;
    width: 315px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-gap: 8px;
    }
`;