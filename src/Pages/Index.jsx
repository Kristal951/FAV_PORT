import React from "react";
import "./styles/index.scss";
import IMG from "../assets/Images/Favour_IMG.png";

const Index = () => {
  return (
    <div className="container">
      <div className="inner-div">
        <img src={IMG} alt="" />
      </div>
      <div className="text-container">
        <p>
          <span className="name-introduction">Hi, i'm Favour.</span> A Graphics
          designer based in Abuja, Nigeria.
        </p>

      </div>
      <div className="button_container">
        <button>Contact Me</button>
        <button>My Resume</button>
      </div>
    </div>
  );
};

export default Index;
