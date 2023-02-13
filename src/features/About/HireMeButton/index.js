import { Button, ImageSection, Content, Link } from "./styled";
import { ReactComponent as ButtonImage } from "./Message.svg";
import { useDarkTheme } from "../../../useDarkTheme";

const HireMeButton = () => {
    const theme = useDarkTheme();

    return (
        <>
            <Link href="mailto: mikolajgraczyk123@gmail.com">
                <Button darkModeEnabled={theme}>
                    <ImageSection>
                        <ButtonImage />
                    </ImageSection>
                    <Content>Hire Me</Content>
                </Button>
            </Link>
        </>
    );
};

export default HireMeButton;