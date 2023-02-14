import { Wrapper, Title, List } from "./styled";
import { useDarkTheme } from "../../useDarkTheme";

const SkillsetList = ({ title, skills }) => {
    const theme = useDarkTheme();

    return (
        <Wrapper darkModeEnabled={theme}>
            <Title darkModeEnabled={theme}>{title}</Title>
            <List darkModeEnabled={theme}>
                {skills}
            </List>
        </Wrapper>
    );
};

export default SkillsetList;