import { Wrapper, Title, SubTitle, StyledGitHubLogo } from "./styled";
import {useDarkTheme} from "../../../useDarkTheme";

const Header = () => {
    const theme = useDarkTheme();

    return (
        <Wrapper darkModeEnabled={theme}>
            <StyledGitHubLogo darkModeEnabled={theme}/>
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
        </Wrapper>
    );
};

export default Header;