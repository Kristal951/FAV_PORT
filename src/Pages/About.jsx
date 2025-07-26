import React from "react";
import "./styles/about.scss";
import IMG from "../assets/Images/Favour_IMG_2.png";

const About = () => {
  return (
    <div className="about_container scroll_snap_container">
      <h2 className="header">About Me</h2>
      <div className="inner_container">
        <div className="left_side">
          <img src={IMG} alt="Favour" />
        </div>

        <div className="right_side">
          <p>
            Hi, I’m <span className="highlight">Favour</span>, a passionate
            graphics designer based in Nigeria. I specialize in creating bold,
            modern, and meaningful designs that elevate brands and communicate
            powerful messages.
          </p>
          <p>
            From logos and branding to social media visuals and custom
            illustrations, my work blends creativity with strategy. I’ve had the
            opportunity to work with a diverse range of clients, helping them
            bring their visions to life.
          </p>
          <p>
            When I’m not designing, I’m exploring new creative trends, sketching
            ideas, or leveling up my skills to stay ahead in this ever-evolving
            field. Let’s create something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
