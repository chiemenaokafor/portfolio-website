import React from "react";
import TextLoop from "react-text-loop";

function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Hi, <br />
        I'm <span className="h1-span">D</span>erick, <br />
        <TextLoop>
          <span> Web developer</span>
          <span> Ui designer</span>
        </TextLoop>{" "}
      </h1>
      <p>Full Stack Developer & UI Designer</p>
      <div>
        <button className="btn">Contact me!</button>
        <button className="btn">Download CV!</button>
      </div>
    </div>
  );
}

export default Welcome;
