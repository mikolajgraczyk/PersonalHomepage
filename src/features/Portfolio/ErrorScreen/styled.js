import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 95px auto 0;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `};
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-top: 50px;
    }
`;

export const ErrorIconSection = styled.div`
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
`;

export const ErrorMainText = styled.div`
    margin: 23px auto 0;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
    max-width: 420px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 20px;
        text-align: center;
    }
`;

export const ErrorDescription = styled.div`
    margin: 32px auto 0;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    max-width: 427px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;

export const ErrorButton = styled.button`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    margin: 32px auto 0;
    width: 168px;
    height: 49px;
    background: ${({ theme }) => theme.color.scienceBlue};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        background: ${({ theme }) => theme.color.dodgerBlue};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        gap: 12px;
        width: 138px;
        height: 46px;
        margin-top: 24px;
        font-size: 15px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;