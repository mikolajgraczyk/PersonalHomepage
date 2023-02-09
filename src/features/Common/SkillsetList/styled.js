import styled from "styled-components";
import listEclipse from "./listEclipse.png";

export const Wrapper = styled.div`
    margin-top: 73px;
    padding: 32px;
`;

export const Title = styled.div`
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 0.05em;
`;

export const List = styled.ol`
    list-style-image: url(${listEclipse});
    display: grid;
    grid-template-columns: repeat(3, auto);
    max-height: 256px;
    gap: 8px;
    grid-column-gap: 140px;
    margin-top: 48px;
    margin-bottom: 0;
    color: ${({theme}) => theme.color.slateGray};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
`;

export const ListElement = styled.li`
    padding-left: 16px;
    margin-left: -24px;
`;