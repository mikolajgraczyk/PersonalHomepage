import styled, { css, keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "./LoadingIcon.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingText = styled.div`
    max-width: 475px;
    font-size: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    margin: 88px auto 0;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
        margin-top: 60px;
    }
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
    color: ${({ theme }) => theme.color.scienceBlue};
    animation: ${rotate} 1s linear infinite;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.dodgerBlue};
    `}
`;

export const LoadingIconSection = styled.div`
    max-width: 160px;
    margin: 48px auto 0;
`;