import styled, { keyframes } from "styled-components";
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
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
    color: ${({ theme }) => theme.color.scienceBlue};
    animation: ${rotate} 1s linear infinite;
`;

export const LoadingIconSection = styled.div`
    max-width: 160px;
    margin: 48px auto 0;
`;