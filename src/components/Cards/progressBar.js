import React from "react";

const progressBar = ({ progress, name }) => {
  const Parentdiv = {
    height: "1rem",
    width: "100%",
    backgroundColor: "var(--color-blue)",
    borderRadius: "1rem",
    margin: "7rem 0",
  };
  const Childdiv = {
    position: "relative",
    height: "100%",
    width: `${progress}%`,
    borderRadius: "0.5rem 0 0 0.5rem",
    backgroundColor: "var(--color-ash)",
    textAlign: "right",
  };

  const progressText = {
    position: "absolute",
    padding: "1rem",
    color: "var(--color-white)",
    backgroundColor: "var(--color-ash)",
    fontWeight: 500,
    bottom: 0,
    right: 0,
    fontSize: "1.5rem",
    width: "max-content",
    borderRadius: "0.5rem 0.5rem 0 0",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progressText}>{`${progress}% ${name}`}</span>
      </div>
    </div>
  );
};

export default progressBar;
