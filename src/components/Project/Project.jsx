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
  title: "Classification of heart disease",
  description: "This project utilizes machine learning to classify heart diseases based on medical data. It analyzes various patient attributes, such as age, blood pressure, and cholesterol levels, to predict the risk of heart disease. The model is trained on real-world data and visualized to better understand the correlations between different variables.",
  category: "Heart disease classification based on medical data",
  sourceCode: "https://github.com/JakubTeichman/Heart_disease_ML_model",
  images: images.project1
}

const Project2 = {
  title: "Bullbozer price prediction",
  description: "This project predicts the prices of used bulldozers using machine learning algorithms. It examines historical transactions and key equipment features, such as production year, operating hours, and model type, to estimate the market value of machines. The model helps businesses make informed buying and selling decisions.",
  category: "Bullbozer price prediction using machine learning",
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
    <>
       <h2 id="projects">MACHINE LEARNING PROJECTS</h2>
      <div className="project">
        {projects.map((project, key) => (
            <article>
              <h1>{project.title}</h1>
              <div>
                {project.images && project.images.map((src, index) => (
                  <img key={index} src={src} alt={`Image ${index + 1}`} />
                ))}
              </div>
              <p>{project.description}</p>
              <button onClick={() => handleButtonClick(project.sourceCode)}>Source code</button>
            </article>
        ))}
      </div>
    
    </>
   
  );
}

export default Project;