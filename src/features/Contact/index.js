import { Wrapper, LetsTalk, Email, Description, Socials, Link, StyledGitHubLogo, StyledLinkedInLogo } from "./styled";
import { useDarkTheme } from "../../useDarkTheme";

const Contact = () => {
    const theme = useDarkTheme();

    return (
        <Wrapper>
            <LetsTalk darkModeEnabled={theme}>LET'S TALK!</LetsTalk>
            <Email darkModeEnabled={theme}>mikolajgraczyk123@gmail.com</Email>
            <Description darkModeEnabled={theme}>I'm always open to new projects whenever I have the time. If you have a website or dashboard in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
            <Socials darkModeEnabled={theme}>
                <Link href="https://github.com/scudoo" target="_blank"><StyledGitHubLogo /></Link>
                <Link><StyledLinkedInLogo /></Link>
            </Socials>
        </Wrapper>
    );
};

export default Contact;