import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-top: 48px;
    }
`;