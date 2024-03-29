import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: auto;
        grid-gap: 16px;
    }
`;

export const Repo = styled.div`
    padding: 56px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    border: 6px solid ${({ theme }) => theme.color.ironOpacity30};
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    &:hover{
        border: 6px solid ${({ theme }) => theme.color.scienceBlueOpacity20};
    }

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        background: ${({ theme }) => theme.color.lighterMineShaft};

        &:hover{
        border: 6px solid ${({ theme }) => theme.color.scienceBlueOpacity50};
        }
        
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        padding: 24px;
    }
`;

export const RepoName = styled.div`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;

export const RepoDescription = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    margin-top: 24px;
    font-size: 18px;
    line-height: 140%;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 14px;
        line-height: 17px;
        margin-top: 16px;
    }
`;

export const RepoAndDemo = styled.div`
    
    font-size: 18px;
    color: ${({ theme }) => theme.color.slateGray};
    letter-spacing: 0.05em;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: left;
    grid-gap: 8px;
    transition: 0.5s;
    height: 100px;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 14px;
        margin-top: 16px;
    }
`;

export const URL = styled.a`
    color: ${({ theme }) => theme.color.scienceBlue};
    border-bottom: 1px solid ${({ theme }) => theme.color.scienceBlueOpacity20};
    text-decoration: none;
    transition: 0.5s;
    max-width: 200px;
    word-break: break-word;
    

    &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.color.scienceBlueOpacity80};
    }

    ${({darkModeEnabled}) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.dodgerBlue};
        border-bottom: 1px solid ${({ theme }) => theme.color.dodgerBlueOpacity40};

        &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.color.dodgerBlueOpacity80};
    }
    `}
`;