import { Wrapper, Title, List, Element, StyledListEllipse } from "./styled";
import { useDarkTheme } from "../../useDarkTheme";

const SkillsetList = ({ title, skills }) => {
    const theme = useDarkTheme();
    const skillsList = skills.map(item =>
        <Element>
            <StyledListEllipse darkModeEnabled={theme} />
            {item.skill}
        </Element>
    );

    return (
        <Wrapper darkModeEnabled={theme}>
            <Title darkModeEnabled={theme}>{title}</Title>
            <List darkModeEnabled={theme}>
                {skillsList}
            </List>
        </Wrapper>
    );
};

export default SkillsetList;