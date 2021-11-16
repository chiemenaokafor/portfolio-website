import React, { useRef } from "react";
import { IoCall, IoLocate, IoMailOpen } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function ContactMe() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fo9vrjk",
        "template_emct53w",
        form.current,
        "user_lvTxurwn8kZv1Dprf0wI5"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err.text));
  };

  return (
    <div className="contact">
      <h2>Let Me Build Your Dream</h2>
      <p>
        Contact me let us work on your project. No dream is too small and no
        dream is too big but no dream is possible without action.
      </p>
      <div className="contact-form">
        <div className="contact-form-info">
          <h3>My Info</h3>
          <ul className="contact-form-info-ul">
            <li>
              <span>
                <IoCall />{" "}
              </span>
              <span>090226630263</span>
            </li>
            <li>
              <span>
                <IoLocate />
              </span>
              <span>ojo, Lagos, Nigeria</span>
            </li>
            <li>
              <span>
                <IoMailOpen />
              </span>
              <span>chiemenaokafor.co @gmail.com</span>
            </li>
          </ul>
          <ul className="sci">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>

        <div className="contact-form-input">
          <form
            ref={form}
            className="contact-form-input-box"
            onSubmit={handleSubmit}
          >
            <div className="input-box w50">
              <input placeholder="Name" type="text" name="name" />
            </div>
            <div className=" input-box w50">
              <input placeholder="E-mail" type="email" name="email" />
            </div>
            <div className=" input-box w50">
              <input
                placeholder="Phone Number"
                type="text"
                name="phoneNumber"
              />
            </div>
            <div className=" input-box w50">
              <input placeholder="Reason" type="text" name="reason" />
            </div>
            <div className=" input-box w100">
              <textarea
                placeholder="Write your message..."
                name="message"
              ></textarea>
            </div>
            <input className="btn input-box w100" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
