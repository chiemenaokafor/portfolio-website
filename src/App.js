import React from "react";
import { motion } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import ScrollToTop from "react-scroll-to-top";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Index from "./pages/Index";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import PortfolioPage from "./pages/PortfolioPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const scroll = {
    zIndex: 20000,
    padding: "1rem",
    height: "5rem",
    width: "5rem",
    fontSize: "3rem",
    color: "var(--color-green)",
    backgroundColor: "var(--color-blue)",
  };
  return (
    <div className="App">
      <div className="one">
        <Sidebar />
      </div>
      <div className="two">
        <ScrollToTop
          smooth
          style={scroll}
          component={<IoArrowUpCircleOutline />}
        />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/contact" component={ContactMePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/skills" component={SkillsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;



  // "engines": {
  //   "node": "14.17.6",
  //   "npm": "6.14.15"
  // },
    // "heroku-postbuild": "npm run build"

