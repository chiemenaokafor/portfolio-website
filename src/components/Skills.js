import React from "react";
import ProgressBar from "./Cards/progressBar";

const uiData = [
  { bgColor: "#9A54F2", progress: 90, name: "figma" },
  { bgColor: "#FF7A00", progress: 70, name: "illustrator" },
  { bgColor: "#00D783", progress: 65, name: "dimension" },
];
const devData = [
  { bgColor: "#E9562F", progress: 90, name: "html" },
  { bgColor: "#0068BA", progress: 90, name: "css" },
  { bgColor: "#D89924", progress: 75, name: "javaScript" },
  { bgColor: "#61DBFB", progress: 70, name: "react" },
];

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-h2">Thing I Know</h2>

      <div className="skills-content">
        <p>
          Over the years as a web developer, I have been able to pick up skills
          that in web development that helps my thinking in designing web sites
          and vice versa. Below are a few of my skills. Visit the skills page to
          see all.{" "}
        </p>

        <div className="skills-content-dev">
          <h5>Web Development</h5>
          <ul className="skills-content-ul">
            {devData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgColor={item.bgColor}
                progress={item.progress}
                name={item.name}
              />
            ))}
          </ul>
        </div>
        <div className="skills-content-dev">
          <h5>UI & UX Design</h5>
          <ul className="skills-content-ul">
            {uiData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgColor={item.bgColor}
                progress={item.progress}
                name={item.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
