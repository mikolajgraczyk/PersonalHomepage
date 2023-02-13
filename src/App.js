import { AppContainer } from "./common/AppContainer/styled";
import { currentSkillset, wantToLearn } from "./features/SkillsetList/skills";
import About from "./features/About";
import HireMeButton from "./features/About/HireMeButton";
import SkillsetList from "./features/SkillsetList";
import Portfolio from "./features/Portfolio";
import Header from "./features/Portfolio/Header";
import Repos from "./features/Portfolio/Repos";
import LoadingScreen from "./features/Portfolio/LoadingScreen";
import ErrorScreen from "./features/Portfolio/ErrorScreen";
import Contact from "./features/Contact";
import ThemeSwitch from "./features/ThemeSwitch";
import { useDarkTheme } from "./useDarkTheme";
import { GlobalStyle } from './GlobalStyle';

function App() {
  const theme = useDarkTheme();
  
  return (
    <>
      <GlobalStyle darkModeEnabled={theme} />
      <AppContainer>
        <ThemeSwitch />
        <About HireMeButton={<HireMeButton />} />
        <SkillsetList
          title="My skillset includes"
          skills={currentSkillset}
        />
        <SkillsetList
          title="What I want to learn next"
          skills={wantToLearn}
        />
        <Portfolio
          Header={<Header />}
          Repos={<Repos />}
          LoadingScreen={<LoadingScreen />}
          ErrorScreen={<ErrorScreen />}
        />
        <Contact />
      </AppContainer>
    </>
  );
}

export default App;
