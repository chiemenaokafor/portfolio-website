import React from "react";
import portfolio1 from "./photos/portfolio1.png";
import portfolio2 from "./photos/portfolio2.png";
function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <div>
        <p>My portfolio includes design and development</p>
      </div>
      <div className="portfolio-card">
        <div className="portfolio-card-container">
          <div className="portfolio-head">
            <img
              className="portfolio-img"
              src={portfolio2}
              alt="portfolio image"
            />
          </div>
          <div className="portfolio-body">
            <li> gettingBooks</li>
          </div>
        </div>
        <div className="portfolio-card-container">
          <div className="portfolio-head">
            <img
              className="portfolio-img"
              src={portfolio2}
              alt="portfolio image"
            />
          </div>
          <div className="portfolio-body">
            <li> gettingBooks</li>
          </div>
        </div>
        <div className="portfolio-card-container">
          <div className="portfolio-head">
            <img
              className="portfolio-img"
              src={portfolio1}
              alt="portfolio image"
            />
          </div>
          <div className="portfolio-body">
            <li> cpc</li>
          </div>
        </div>
        <div className="portfolio-card-container">
          <div className="portfolio-head">
            <img
              className="portfolio-img"
              src={portfolio1}
              alt="portfolio image"
            />
          </div>
          <div className="portfolio-body">
            <li> gettingEverything</li>
          </div>
        </div>
        <div className="portfolio-card-container">
          <div className="portfolio-head">
            <img
              className="portfolio-img"
              src={portfolio2}
              alt="portfolio image"
            />
          </div>
          <div className="portfolio-body">
            <li> natours</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
