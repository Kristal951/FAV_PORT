import React, { useState } from "react";
import "./styles/projects.scss";
import Flyer_1 from "../assets/Images/Favour_Flyer_1.jpg";
import Flyer_2 from "../assets/Images/Favour_Flyer_2.jpg";
import Flyer_3 from "../assets/Images/Favour_Flyer_3.jpg";
import Flyer_4 from "../assets/Images/Favour_Flyer_4.jpg";
import Flyer_5 from "../assets/Images/Favour_Flyer_5.jpg";
import Flyer_6 from "../assets/Images/Favour_Flyer_6.jpg";
import Flyer_7 from "../assets/Images/Favour_Flyer_7.jpg";

const projectData = [
  {
    title: "Happy New Month",
    description:
      "A cheerful and visually appealing flyer designed to greet people with positivity at the beginning of a new month.",
    flyer: Flyer_1,
  },
  {
    title: "Mobile Data Vendor",
    description:
      "An eye-catching flyer advertising affordable and fast mobile data services, tailored for daily internet users.",
    flyer: Flyer_2,
  },
  {
    title: "Church Harvest Flyer",
    description:
      "A festive and spiritual flyer promoting a church harvest celebration, highlighting praise, thanksgiving, and community gathering.",
    flyer: Flyer_3,
  },
  {
    title: "Upcoming Seminar Alert",
    description:
      "A professional and informative flyer announcing an upcoming seminar, complete with date, time, and registration details.",
    flyer: Flyer_4,
  },
  {
    title: "Happy Anniversary Flyer",
    description:
      "A romantic and celebratory flyer designed to commemorate a couple’s special anniversary moment.",
    flyer: Flyer_5,
  },
  {
    title: "Appreciation Flyer",
    description:
      "A clean and calming flyer used to appreciate someone or a group of people.",
    flyer: Flyer_6,
  },
  {
    title: "Easter Celebration Flyer",
    description:
      "A joyful and colorful flyer promoting an Easter event filled with religious services, family fun, and celebration.",
    flyer: Flyer_7,
  },
];

const Projects = () => {
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  return (
    <div className="projects_container">
      <div className="projects_header">
        <h1>My Projects</h1>
      </div>

      <div className="projects_grid">
        {projectData.map((project, index) => (
          <div className="project_box" key={index} onClick={() => setSelectedFlyer(project.flyer)}>
            <img
              src={project.flyer}
              alt={project.title}
              className="project_image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedFlyer && (
        <div className="modal_overlay" onClick={() => setSelectedFlyer(null)}>
          <img src={selectedFlyer} alt="Flyer" className="modal_image" />
        </div>
      )}
    </div>
  );
};

export default Projects;
