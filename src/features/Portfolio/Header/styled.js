import styled, { css } from "styled-components";
import { ReactComponent as GitHubLogo } from "./GitHubLogo.svg";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledGitHubLogo = styled(GitHubLogo)`
    color: ${({ theme }) => theme.color.scienceBlue};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.dodgerBlue};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 32px;
    }
`;

export const Title = styled.div`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 0.05em;
    margin-top: 13px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
    }
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.05em;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
        margin-top: 16px;
    }
`;
