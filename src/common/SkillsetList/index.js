import { Wrapper, Title, List } from "./styled";

const SkillsetList = ({ title, skills }) => (
    <Wrapper>
        <Title>{title}</Title>
        <List>
            {skills}
        </List>
    </Wrapper>
);

export default SkillsetList;