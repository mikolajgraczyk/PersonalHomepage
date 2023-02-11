import { Wrapper, LetsTalk, Email, Description, Socials } from "./styled";
import { ReactComponent as GitHubLogo } from "./SocialLogos/GitHubLogo.svg";
import { ReactComponent as LinkedInLogo } from "./SocialLogos/LinkedInLogo.svg";

const Contact = () => (
    <Wrapper>
        <LetsTalk>LET'S TALK!</LetsTalk>
        <Email>mikolajgraczyk123@gmail.com</Email>
        <Description>I'm always open to new projects whenever I have the time. If you have a website or dashboard in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
        <Socials>
            <GitHubLogo />
            <LinkedInLogo />
        </Socials>
    </Wrapper>
);

export default Contact;