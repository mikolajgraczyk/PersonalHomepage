import photo from "./photo.jpg";
import { Wrapper, Image, ImageSection, ContentSection, Introducer, Title, Content } from "./styled";


const About = ({ HireMeButton }) => {
    return (
        <Wrapper>
            <ImageSection>
                <Image src={photo} alt="Author"/>
            </ImageSection>
            <ContentSection>
                <Introducer>THIS IS</Introducer>
                <Title>Mikołaj Graczyk</Title>
                <Content>👨💻I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities. </Content>
                {HireMeButton}
            </ContentSection>
        </Wrapper>
    );
};

export default About;