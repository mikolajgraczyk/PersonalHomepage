import styled from "styled-components";

export const Wrapper = styled.button`
    width: 154px;
    height: 49px;
    background: ${({theme}) => theme.color.scienceBlue};
    color: ${({theme}) => theme.color.white};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    margin-top: 32px;

    &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, 
        -2px 2px 0px #8CC2FF, 
        2px 2px 0px #8CC2FF, 
        -2px -2px 0px #8CC2FF;
    }

    &:active{
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;

export const ImageSection = styled.div`
    width: 24px;
    height: 24px;
`;

export const Content = styled.div`
    color: ${({theme}) => theme.color.white};
    font-size: 20px;
    font-weight: 600;
`;