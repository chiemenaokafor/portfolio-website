import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <div className="one">
        <Sidebar />
      </div>
      <div className="two">
        <Welcome />
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
