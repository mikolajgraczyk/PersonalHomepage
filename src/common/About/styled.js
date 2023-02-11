import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    max-width: 1089px;
    grid-template-columns: auto 2fr;
    grid-gap: 66px;
    align-items: center;
    margin-top: 119px;
`;

export const ImageSection = styled.div`
    width: 398px;
    height: 398px;
`;

export const Image = styled.img`
    max-width: 384px;
    border-radius: 50%;
`;

export const ContentSection = styled.div`
`;

export const Introducer = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
    width: 43px;
    height: 16px;
    margin-top: 0px;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
    color: ${({theme}) => theme.color.white};
    `}
`;

export const Title = styled.div`
    margin-top: 12px;
    width: 415px;
    height: 46px;
    font-weight: 900;
    font-size: 38px;  
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
    color: ${({theme}) => theme.color.white};
    `}
`;

export const Content = styled.div`
    margin-top: 35px;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.slateGray};
    letter-spacing: 0.05em;
    line-height: 140%;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
    color: ${({theme}) => theme.color.white};
    `}
`;