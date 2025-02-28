import { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const images = [
    "https://github.com/JakubTeichman/PowerBI-raports/blob/main/Car%20accidents/Car%20accidents%20raport.jpg?raw=true",
    "https://github.com/JakubTeichman/PowerBI-raports/blob/main/Car%20accidents/Car%20accidents%20raport.jpg"
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[index]} alt="Slide" />
        <button onClick={prevSlide} className="slider-btn prev-btn">←</button>
        <button onClick={nextSlide} className="slider-btn next-btn">→</button>
      </div>
    </div>
  );
}
