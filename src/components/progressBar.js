import React from "react";

const progressBar = ({ bgColor, progress, name }) => {
  const Parentdiv = {
    height: "1rem",
    width: "70rem",
    backgroundColor: "var(--color-blue)",
    borderRadius: "4rem",
    margin: "7rem 0",
  };
  const Childdiv = {
    position: "relative",
    height: "100%",
    width: `${progress}%`,
    borderRadius: "4rem 0 0 4rem",
    backgroundColor: 'var(--color-green)',
    textAlign: "right",
  };

  const progressText = {
    position: "absolute",
    padding: 10,
    color: "var(--color-white)",
    backgroundColor: 'var(--color-green)',
    fontWeight: 500,
    bottom: 0,
    right: 0,
    fontSize: "15px",
    width: "max-content",
    borderRadius: "1rem 1rem 0 0",
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
