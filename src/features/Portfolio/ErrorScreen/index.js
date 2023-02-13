import { ErrorIconSection, ErrorMainText, ErrorDescription, ErrorButton, Wrapper, Link } from "./styled";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";
import { useDarkTheme } from "../../../useDarkTheme";

const ErrorScreen = () => {
    const theme = useDarkTheme();

    return (
        <Wrapper darkModeEnabled={theme}>
            <ErrorIconSection>
                <ErrorIcon />
            </ErrorIconSection>
            <ErrorMainText>Ooops! Something went wrong... </ErrorMainText>
            <ErrorDescription>
                Sorry, failed to load Github projects.
                You can check them directly on Github.
            </ErrorDescription>
            <Link href="https://github.com/scudoo" target="_blank">
                <ErrorButton darkModeEnabled={theme}>Go to Github</ErrorButton>
            </Link>
        </Wrapper>
    );
};

export default ErrorScreen;