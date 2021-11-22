import React from "react";
import { IoLink, IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

function CardPage({ name, img, text, url, git, tools }) {
  return (
    <div>
      <div className="port-card">
        <div className="port-card-head">
          <img className="port-card-img" src={img} alt="project image" />
        </div>

        <div className="port-card-body">
          <div className='port-card-body-h'>
            <h4 className="port-card-name">{name}</h4>
            <p className="port-card-text">{text}</p>
            <ul className="port-card-tools">
              {tools.map((item, idx) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="port-card-links">
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
}

export default CardPage;
