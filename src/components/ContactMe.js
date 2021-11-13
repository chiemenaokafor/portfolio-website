import React, { useState } from "react";
// import { db } from "../firebase.js";
// import { collection } from "firebase/firestore";
import { IoCall, IoLocate, IoMailOpen } from "react-icons/io5";
function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    /*  {
    db.collection("contact messages")
      .add({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      })
      .then(() => {
        alert("Form has been sent!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    }*/
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setReason("");
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
          <form className="contact-form-input-box" onSubmit={handleSubmit}>
            <div className="input-box w50">
              <input value={name} onChange={(e) => setName(e.target.value)} />

              <span>Name</span>
            </div>
            <div className=" input-box w50">
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>Email</span>
            </div>
            <div className=" input-box w50">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <span> Phone Number</span>
            </div>
            <div className=" input-box w50">
              <input
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              <span>Reason</span>
            </div>
            <div className=" input-box w100">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span>Write your message...</span>
            </div>
            <input className="btn input-box w100" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
