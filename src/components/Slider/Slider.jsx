import { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const images = {
    "CAR ACCIDENT RAPORT": "https://github.com/JakubTeichman/PowerBI-raports/blob/main/Car%20accidents/Car%20accidents%20raport.jpg?raw=true",
    "NUCLEAR PLANTS RAPORT": "https://github.com/JakubTeichman/PowerBI-raports/blob/main/Nuclear%20plants/Nuclear_Plant_Raport_page-0001.jpg?raw=true"
  };

  const imageTitles = Object.keys(images);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % imageTitles.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + imageTitles.length) % imageTitles.length);

  return (
    <>
        <h2 id="raports">POWER BI RAPORTS</h2>
        <div className="slider-container">
        <h2>{imageTitles[index]}</h2>
        <div className="slider">
            <img src={images[imageTitles[index]]} alt={imageTitles[index]} />
            <button onClick={prevSlide} className="slider-btn prev-btn">←</button>
            <button onClick={nextSlide} className="slider-btn next-btn">→</button>
        </div>
        </div>
    </>
    
  );
}
