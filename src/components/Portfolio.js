import React, { Component } from "react";
import portfolio1 from "./photos/portfolio1.png";
import portfolio2 from "./photos/portfolio2.png";
import portfolio3 from "./photos/portfolio3.png";
import portfolio4 from "./photos/portfolio4.png";
import Card from "./Cards/card";

const devWork = [
  {
    tools: ["react", "javascript"],
    git: "https://github.com/chiemenaokafor/portfolio-website",
    name: "gettingBooks",
    img: `${portfolio2}`,
    text: "FAlgorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.",
    url: "https://github.com/chiemenaokafor/portfolio-website",
  },
  {
    tools: ["node", "react", "express", "mongodb", "javascript"],
    git: "github link",
    name: "natours",
    img: `${portfolio1}`,
    text: "Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    url: "css",
  },
  {
    tools: ["node", "express", "mongodb", "javascript"],
    git: "github link",
    name: "the pig game",
    img: `${portfolio3}`,
    text: "Be the best for yourself At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    url: "javaScript",
  },
  {
    tools: ["express", "mongodb", "javascript"],
    git: "github link",
    name: "digital yearbook",
    img: `${portfolio4}`,
    text: "A digital year book for school On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those",
    url: "react",
  },
];

class portfolio extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div>
        <div className="portfolio">
          <h2 className="portfolio-h2">Some Things I've Created</h2>
          {/*   <div>
            <p>My portfolio includes design and development</p>
          </div>
          <button
            className="portfolio-btn"
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            Boy
          </button>
          <button
            className="portfolio-btn"
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            Man
          </button>*/}
          <div>
            {this.state.visible ? (
              <div className="portfolio-dev">
                {devWork.map((item, idx) => (
                  <Card
                    key={idx}
                    name={item.name}
                    img={item.img}
                    url={item.url}
                    text={item.text}
                    git={item.git}
                    tools={item.tools}
                  />
                ))}
              </div>
            ) : (
              <div className="portfolio-dev">
                {devWork.map((item, idx) => (
                  <Card
                    key={idx}
                    name={item.name}
                    img={item.img}
                    url={item.url}
                    text={item.text}
                    tools={item.tool}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default portfolio;
