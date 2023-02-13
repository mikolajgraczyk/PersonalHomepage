import photo from "./photo.jpg";
import { Wrapper, Image, ImageSection, ContentSection, Introducer, Title, Content } from "./styled";
import { useDarkTheme } from "../../useDarkTheme";

const About = ({ HireMeButton }) => {
    const theme = useDarkTheme();

    return (
        <Wrapper>
            <ImageSection>
                <Image src={photo} alt="Author" />
            </ImageSection>
            <ContentSection>
                <Introducer darkModeEnabled={theme}>THIS IS</Introducer>
                <Title darkModeEnabled={theme}>Mikołaj Graczyk</Title>
                <Content darkModeEnabled={theme}>👨💻I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities. </Content>
                {HireMeButton}
            </ContentSection>
        </Wrapper>
    );
};

export default About;