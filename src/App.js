import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";
import CardList from "./components/Card";

function App() {
  return (
    <Wrapper>
      <Header />
      <MainSection/>
      <CardList/>
    </Wrapper>
  );
}

export default App;


