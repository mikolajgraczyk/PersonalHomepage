import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    color: ${({theme}) => theme.color.mineShaft};
`;

export const Title = styled.div`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 0.05em;
    margin-top: 13px;
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.05em;
`;
