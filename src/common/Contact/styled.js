import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 120px;
    max-width: 691px;
`;

export const LetsTalk = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
`;

export const Email = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    margin-top: 24px;
    font-weight: 900;
    font-size: 32px;
    letter-spacing: 0.05em;
`;

export const Description = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    margin-top: 24px;
    font-size: 18px;
    line-height: 140%; 
    letter-spacing: 0.05em;
`;

export const Socials = styled.div`
    margin: 56px 0 109px 0;
    display: flex;
    gap: 24px;
`;