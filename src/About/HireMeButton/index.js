import { Wrapper, ImageSection, Content } from "./styled";
import { ReactComponent as ButtonImage } from "./Message.svg";


const HireMeButton = () => {
    return (
        <Wrapper>
            <ImageSection>
                <ButtonImage />
            </ImageSection>
            <Content>Hire Me</Content>
        </Wrapper>
    );
};

export default HireMeButton;