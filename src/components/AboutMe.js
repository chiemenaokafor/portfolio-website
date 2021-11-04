import React from "react";
import aboutImg from "./photos/about-img.png";
import {
  IoPersonCircleOutline,
  IoCalendarSharp,
  IoMailOpenSharp,
  IoCallSharp,
  IoMapSharp,
  IoFlagSharp,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoDribbble,
} from "react-icons/io5";
import "./page.css";
import { Link } from "react-router-dom";

function AboutMe() {
  const AboutMe = () => {};
  return (
    <div className="about-me">
      <h2 className="about-me-h2">About me </h2>
      <div className="about-me-container">
        <div className="about-me-img">
          <img className="about-me-imgg" alt="about me image" src={aboutImg} />
        </div>
        <div className="about-me-info">
          {/*       <ul className="about-me-info-ul">
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoPersonCircleOutline />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Name</h5>
                <li className="about-me-info-p">Okafor Chiemena</li>
              </div>
            </li>
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoMailOpenSharp />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Email</h5>
                <li className="about-me-info-p">chiemenaokafor.co@gmail.com</li>
              </div>
            </li>
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoCallSharp />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Phone</h5>
                <li className="about-me-info-p">+2349026630263</li>
              </div>
            </li>
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoCalendarSharp />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Date of birth</h5>
                <li className="about-me-info-p">23rd Feb 1999</li>
              </div>
            </li>
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoMapSharp />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Address</h5>
                <li className="about-me-info-p">Ojo Lagos</li>
              </div>
            </li>
            <li className="about-me-info-li">
              <i className="about-me-info-icon">
                <IoFlagSharp />
              </i>
              <div className="about-me-info-details">
                <h5 className="about-me-info-h5">Nationality</h5>
                <li className="about-me-info-p">Nigerian</li>
              </div>
            </li>
  </ul>*/}
        </div>
        <div className="about-me-text">
          <p>
            Well, I’ve been working on mobile app development for four years
            now, while still studying at college. Had my own projects, coded
            mostly in Java and Python, but my account on the play store got
            suspended, for reasons I still fail to understand. <br />
            But I learned a lot, both at school and while working on the apps.
            Now I am looking to get a job with an innovative game studio, and am
            glad to be interviewing with you here. Apart from coding, I enjoy
            reading a good book, or a nice evening out with friends. <br /> That
            would do for a short introduction, please tell me if you’d like me
            to elaborate on anything from my education, or experience with apps.
          </p>
        </div>

        <div className="about-me-social">
          <h5 className="about-me-social-h5">Social accounts</h5>
          <ul className="about-me-social-ul">
            <h6>click the icon to view account</h6>

            <div>
              <Link
                target="_blank"
                to={{
                  pathname: "https://www.linkedin.com/in/chiemenaokafor/",
                }}
                className="about-me-social-li"
              >
                <i>
                  <IoLogoLinkedin />
                </i>
              </Link>
              <Link
                target="_blank"
                to={{ pathname: "https://twitter.com/_chiemena" }}
                className="about-me-social-li"
              >
                <span></span>
                <i>
                  <IoLogoTwitter />
                </i>
              </Link>
              <Link
                target="_blank"
                to={{ pathname: "https://instagram.com/_chiemena" }}
                className="about-me-social-li"
              >
                <i>
                  <IoLogoInstagram />
                </i>
              </Link>
              <Link
                target="_blank"
                to={{ pathname: "https://dribbble.com/ChiemenaOD" }}
                className="about-me-social-li"
              >
                <i>
                  <IoLogoDribbble />
                </i>
              </Link>
              <Link
                target="_blank"
                to={{ pathname: " https://wa.me/09126630263" }}
                className="about-me-social-li"
              >
                <i>
                  <IoLogoWhatsapp />
                </i>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
