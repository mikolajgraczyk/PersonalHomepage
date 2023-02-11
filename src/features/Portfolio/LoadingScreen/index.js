import { LoadingText, StyledLoadingIcon, LoadingIconSection } from "./styled";
import { useDarkTheme } from "../../../useDarkTheme";

export const LoadingScreen = () => {
    const theme = useDarkTheme();

    return (
        <>
            <LoadingText darkModeEnabled={theme}>Please wait, projects are being loaded...</LoadingText>
            <LoadingIconSection>
                <StyledLoadingIcon darkModeEnabled={theme} />
            </LoadingIconSection>
        </>
    );
};

export default LoadingScreen;