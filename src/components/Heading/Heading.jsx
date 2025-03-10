import React, { useState } from 'react';
import './Heading.css';

const Heading = () => {
  const [state, setState] = useState(null);

  return (
    <nav>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#cyber">Cybersecurity</a>
        <a href="#contact">Contact</a>
    </nav>
  );
};

export default Heading;
