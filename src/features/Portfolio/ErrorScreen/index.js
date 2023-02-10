import { ErrorIconSection, ErrorMainText, ErrorDescription, ErrorButton } from "./styled";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";

const ErrorScreen = () => (
    <>
        <ErrorIconSection>
            <ErrorIcon />
        </ErrorIconSection>
        <ErrorMainText>Ooops! Something went wrong... </ErrorMainText>
        <ErrorDescription>
            Sorry, failed to load Github projects.
            You can check them directly on Github.
        </ErrorDescription>
        <ErrorButton>Go to Github</ErrorButton>
    </>
);

export default ErrorScreen;