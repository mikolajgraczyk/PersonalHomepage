import { AppContainer } from "./features/Common/AppContainer/styled";
import { currentSkillset, wantToLearn } from "./features/Common/SkillsetList/skills";
import About from "./features/Common/About";
import HireMeButton from "./features/Common/About/HireMeButton";
import SkillsetList from "./features/Common/SkillsetList";

function App() {
  return (
    <AppContainer>
      <About HireMeButton={<HireMeButton />} />
      <SkillsetList title="My skillset includes" skills={currentSkillset}/>
      <SkillsetList title="What I want to learn next" skills={wantToLearn}/>
    </AppContainer>
  );
}

export default App;
