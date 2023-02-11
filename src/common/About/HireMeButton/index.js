import { Wrapper, ImageSection, Content } from "./styled";
import { ReactComponent as ButtonImage } from "./Message.svg";
import { useDarkTheme } from "../../../useDarkTheme";

const HireMeButton = () => {
    const theme = useDarkTheme();

    return (
        <Wrapper darkModeEnabled={theme}>
            <ImageSection>
                <ButtonImage />
            </ImageSection>
            <Content>Hire Me</Content>
        </Wrapper>
    );
};

export default HireMeButton;