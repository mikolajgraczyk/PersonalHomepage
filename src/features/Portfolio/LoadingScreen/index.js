import { LoadingText, StyledLoadingIcon, LoadingIconSection } from "./styled";

export const LoadingScreen = () => (
    <>
        <LoadingText>Please wait, projects are being loaded...</LoadingText>
        <LoadingIconSection>
            <StyledLoadingIcon />
        </LoadingIconSection>
    </>
);

export default LoadingScreen;