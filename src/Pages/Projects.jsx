import React from 'react';
import './styles/projects.scss';

const Projects = () => {
  return (
    <div className='projects_container'>
      <div className="projects_header">
        <h1>My Projects</h1>
      </div>

      <div className="projects_grid">
        {[1, 2, 3].map((item, index) => (
          <div className='project_box' key={index}>
            <h3>Project {item}</h3>
            <p>This is a short description of project {item}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
