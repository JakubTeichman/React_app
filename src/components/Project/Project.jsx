import React, { useState } from "react";
import "./Project.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    const folder = item.split('/')[1];
    if (!images[folder]) {
      images[folder] = [];
    }
    images[folder].push(r(item));
  });
  return images;
}

const images = importAll(require.context('../../static', true, /\.(png|jpe?g|svg)$/));

const Project1 = {
  title: "Project 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
  category: "category",
  sourceCode: "https://github.com/JakubTeichman/Heart_disease_ML_model",
  images: images.project1
}

const Project2 = {
  title: "Project 2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
  category: "category",
  sourceCode: "https://github.com/JakubTeichman/Bullbozer_price_prediction_ML_project",
  images: images.project2
}

const Project3 = {
  title: "Project 3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
  category: "category",
  sourceCode: "https://example.com",
  images: images.project3
}

const Project4 = {
  title: "Project 4",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
  category: "category",
  sourceCode: "https://example.com",
  images: images.project4
}


const projects = [Project1, Project2];

const Project = () => {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
  
    <div className="project" id="projects">
      {projects.map((project, key) => (
          <article>
            <h1>{project.title}</h1>
            <div>
              <p>{project.category}</p>
              {project.images && project.images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
            <p>{project.description}</p>
            <button onClick={() => handleButtonClick(project.sourceCode)}>Source code</button>
          </article>
      ))}
    </div>
    
  );
}

export default Project;