import styled, { css } from "styled-components";
import { ReactComponent as GitHubLogo } from "./SocialLogos/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "./SocialLogos/LinkedInLogo.svg";

export const Wrapper = styled.div`
    margin-top: 120px;
    max-width: 691px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-top: 48px;
    }
`;

export const LetsTalk = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}
`;

export const Email = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    margin-top: 24px;
    font-weight: 900;
    font-size: 32px;
    letter-spacing: 0.05em;
    transition: 0.5s;

    &:hover{
        color: ${({ theme }) => theme.color.scienceBlue};
    }

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};

        &:hover{
            color: ${({ theme }) => theme.color.dodgerBlue};
        }
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
    }

`;

export const Description = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    margin-top: 24px;
    font-size: 18px;
    line-height: 140%; 
    letter-spacing: 0.05em;
    transition: 0.5s;
    
    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Socials = styled.div`
    margin-top: 56px;
    display: flex;
    gap: 24px;
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.alto};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-top: 40px;
        gap: 16px;
    }
`;

export const StyledGitHubLogo = styled(GitHubLogo)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 32px;
    }
`;

export const StyledLinkedInLogo = styled(LinkedInLogo)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 32px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.5s;

    &:hover{
        color: ${({ theme }) => theme.color.scienceBlue};
    }

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.alto};

        &:hover{
            color: ${({ theme }) => theme.color.dodgerBlue};
    }

    `}
`;