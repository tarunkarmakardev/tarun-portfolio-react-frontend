import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/loader/Loader";

// Containers
import ContactContainer from "./containers/ContactContainer";
import AboutContainer from "./containers/AboutContainer";
import HeroContainer from "./containers/HeroContainer";
import ProjectsViewContainer from "./containers/ProjectsViewContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HeroContainer />
        </Route>
        <Route exact path="/about">
          <AboutContainer />
        </Route>
        <Route exact path="/projects">
          <ProjectsViewContainer />
        </Route>
        <Route exact path="/contact">
          <ContactContainer />
        </Route>
        <Route exact path="/loader">
          <Loader />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
