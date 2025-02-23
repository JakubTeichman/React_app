import React, {useState} from "react";
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

const Project = () => {
    return (
    <div className="project" id="projects">
        {Object.keys(images).map(folder => (
            <article>
                <h1>{folder}</h1>
                    <div key={folder}>
                        {images[folder].map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                <p>Project description</p>
            </article>
        ),)}
    </div>
        
      );
  }

export default Project;