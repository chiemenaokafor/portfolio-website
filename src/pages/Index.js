import "./page.css";
import AboutMe from "../components/aboutMe";
import Portfolio from "../components/portfolio";
import ContactMe from "../components/contactMe";
import Skills from "../components/skills";
import Welcome from "../components/welcome";

function Index() {
  return (
    <div className="Index">
      <Welcome />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default Index;
