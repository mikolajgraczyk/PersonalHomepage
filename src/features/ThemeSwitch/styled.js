import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    float: right;
    align-items: center;
    margin-top: 119px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-top: 7px;
        margin-right: 3px;
    }
`;

export const ToggleText = styled.div`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.slateGray};

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        color: ${({ theme }) => theme.color.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        display: none;
    }
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.color.mercury};
    border: 1px solid ${({ theme }) => theme.color.slateGray};
    width: 47px;
    height: 25px;
    border-radius: 100px;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: 0.5s;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        border: 1px solid ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.lighterMineShaft};
    `}
`;

export const ButtonIcon = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    display: grid;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.color.slateGray};
    transition: 0.5s;
    color: white;

    ${({ darkModeEnabled }) => darkModeEnabled && css`
        transform: translateX(21px);
        color: black;
        background: ${({ theme }) => theme.color.white};
    `}
`;