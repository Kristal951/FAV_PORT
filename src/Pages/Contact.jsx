import React from "react";
import "./styles/contact.scss";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="header_container">
        <h2>Contact Me</h2>
      </div>

      <div className="content_container">
        {/* Left Side */}
        <div className="left_container">
          <div className="up_side">
            <h2 className="up_side_heading">Let's Get In Touch</h2>
            <p>
              I'm currently free to take on new projects. Please feel free to
              contact me via the details below or use the form to
              send me a message. You can contact me anytime.
            </p>
          </div>

          <div className="down_side">
            <div className="content_box">
              <IoCall className="icon" />
              <p>+234 614 113 96</p>
            </div>
            <div className="content_box">
              <FaLocationDot className="icon" />
              <p>Abuja, Nigeria</p>
            </div>
            <div className="content_box">
              <IoMdMail className="icon" />
              <p>creativeminds0810@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right_side">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
