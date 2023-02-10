import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 24px;
`;

export const Repo = styled.div`
    padding: 56px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    border: 6px solid ${({ theme }) => theme.color.ironOpacity};

    &:hover{
        border: 6px solid ${({ theme }) => theme.color.scienceBlueOpacity};
    }
`;

export const RepoName = styled.div`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
`;

export const RepoDescription = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    margin-top: 24px;
    font-size: 18px;
    line-height: 140%;
`;

export const RepoAndDemo = styled.div`
    margin-top: 24px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.slateGray};
    letter-spacing: 0.05em;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: left;
    grid-gap: 8px;
`;

export const DemoURL = styled.a`
    border-bottom: 1px ${({ theme }) => theme.color.scienceBlueOpacity} solid; 
    &:link{
        color: ${({ theme }) => theme.color.scienceBlue};
        text-decoration: none;
    }
    
    &:visited{
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;

export const CodeURL = styled.a`
    border-bottom: 1px ${({ theme }) => theme.color.scienceBlueOpacity} solid;

    &:link{
        color: ${({ theme }) => theme.color.scienceBlue};
        text-decoration: none;
    }

    &:visited{
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;