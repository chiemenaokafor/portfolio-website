import React from "react";
import port5 from "./img/port5.png";
import port1 from "./img/port1.png";
import port3 from "./img/port3.png";
import port2 from "./img/port2.png";
import port4 from "./img/port4.png";
import CardPage from "../components/Cards/CardPage";

const portCard = [
  {
    name: "GettingBooks",
    text: "rum fuga. Et harum qu placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum ne",
    tools: ["node", "mongodb"],
    img: `${port1}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "Natours",
    text: "erum facilis est et expedita voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum ne",
    tools: ["mongodb", "react"],
    img: `${port2}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "Digital YearBook",
    text: "e moment, so blinded Nam libero tempore, cum soluta nobis est eligen, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum ne",
    tools: ["express", "mongodb", "react"],
    img: `${port3}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "GettingBooks",
    text: "e moment, so blinded re, cum soluta nobis est eligendi optio culor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum ne",
    tools: ["node", "express", "mongodb", "react"],
    img: `${port5}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "GettingBooks",
    text: "Nam libero temporeta nobis est eligendi optio cumque nihil i gigterr us. Temporibus autem quibusdam et aut officiis debitis aut rerum ne",
    tools: ["node", "express", "mongodb", "react"],
    img: `${port4}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "GettingBooks",
    text: "i sint occaecati cupiditate non provident",
    tools: ["react"],
    img: `${port2}`,
    git: "fvfv",
    url: "fggbgfb",
  },
  {
    name: "GettingBooks",
    text: "milique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ",
    tools: ["node", "express", "mongodb", "react"],
    img: `${port1}`,
    git: "fvfv",
    url: "fggbgfb",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <h2>Finished Projects</h2>
      <div className="portfolio-page-container">
        {portCard.map((item, idx) => (
          <CardPage
            key={idx}
            name={item.name}
            img={item.img}
            tools={item.tools}
            git={item.git}
            url={item.url}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
