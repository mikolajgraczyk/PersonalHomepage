import { Wrapper, LetsTalk, Email, Description, Socials } from "./styled";
import { ReactComponent as GitHubLogo } from "./SocialLogos/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "./SocialLogos/LinkedInLogo.svg";
import { useDarkTheme } from "../../useDarkTheme";

const Contact = () => {
    const theme = useDarkTheme();
    
    return (
        <Wrapper>
            <LetsTalk darkModeEnabled={theme}>LET'S TALK!</LetsTalk>
            <Email darkModeEnabled={theme}>mikolajgraczyk123@gmail.com</Email>
            <Description darkModeEnabled={theme}>I'm always open to new projects whenever I have the time. If you have a website or dashboard in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
            <Socials darkModeEnabled={theme}>
                <GitHubLogo />
                <LinkedInLogo />
            </Socials>
        </Wrapper>
    );
};

export default Contact;