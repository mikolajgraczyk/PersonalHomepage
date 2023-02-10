import styled from "styled-components";

export const ErrorIconSection = styled.div`
    max-width: 500px;
    text-align: center;
    margin: 95px auto 0;
`;

export const ErrorMainText = styled.div`
    margin: 23px auto 0;
    color: ${({ theme }) => theme.color.mineShaft};
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
    max-width: 420px;
`;

export const ErrorDescription = styled.div`
    margin: 32px auto 0;
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    max-width: 427px;
    text-align: center;
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
    background: ${({theme}) => theme.color.scienceBlue};
    border: none;
    border-radius: 4px;
    color: ${({theme}) => theme.color.white};
`;