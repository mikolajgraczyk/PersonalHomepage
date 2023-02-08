import { AppContainer } from "./AppContainer/styled";
import About from "./About";
import HireMeButton from "./About/HireMeButton";

function App() {
  return (
    <AppContainer>
      <About HireMeButton={<HireMeButton />} />
    </AppContainer>
  );
}

export default App;
