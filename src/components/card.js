import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub, IoLink } from "react-icons/io5";

const card = ({ name, img, url, text, tools, git }) => {
  return (
    <div className="card">
      <div className="card-head">
        <Link
          target="_blank"
          to={{
            pathname: `${url}`,
          }}
        >
          <img className="card-img" src={img} alt="card image" />
        </Link>
      </div>
      <div className="card-body">
        <div className="card-body-content">
          <h4 className="card-name">{name}</h4>

          <div className="card-text">
            <p>{text}</p>
          </div>
          <ul className="card-tools">
            {tools.map((item, idx) => (
              <li>{item}</li>
            ))}
          </ul>
          <div>
            <Link
              className="card-link"
              target="_blank"
              to={{
                pathname: `${git}`,
              }}
            >
              <IoLogoGithub />
            </Link>
            <Link className="card-link" target="_blank" to={url}>
              <IoLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
