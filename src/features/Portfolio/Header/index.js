import { Wrapper, Title, SubTitle } from "./styled";
import { ReactComponent as GitHubLogo } from "./GitHubLogo.svg";

const Header = () => (
    <Wrapper>
        <GitHubLogo></GitHubLogo>
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
    </Wrapper>
);

export default Header;