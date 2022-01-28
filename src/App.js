import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/work" component={WorkPage}></Route>
        <Route exact path="/skills" component={MySkillsPage}></Route>
      </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
