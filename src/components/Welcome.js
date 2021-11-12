import React from "react";
import TextLoop from "react-text-loop";
import welcome from "./photos/welcome.png";
function Welcome() {
  return (
    <div className="landing-welcome">
      <div className="welcome">
        <h1>
          Hi, <br />
          I'm <span className="h1-span">D</span>erick, <br />
          <TextLoop>
            <span> Web developer</span>
            <span> Ui designer</span>
          </TextLoop>{" "}
        </h1>
        <p>I design and build things for the web.</p>
        <div>
          <button className="btn">Contact me!</button>
          <button className="btn">Download CV!</button>
        </div>
      </div>
      <div className="welcome-img">
        <img src={welcome} alt="welcome image" />
      </div>
    </div>
  );
}

export default Welcome;
