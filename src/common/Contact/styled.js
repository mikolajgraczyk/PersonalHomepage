import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 120px;
    max-width: 691px;
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
`;

export const Socials = styled.div`
    margin: 56px 0 109px 0;
    display: flex;
    gap: 24px;
    color: ${({ theme }) => theme.color.mineShaft};
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.alto};
    `}
`;