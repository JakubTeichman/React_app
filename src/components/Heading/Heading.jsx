import React, { useState } from 'react';
import './Heading.css';

const Heading = () => {
  const [state, setState] = useState(null);

  return (
    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="#projects">Projects</a>
        <a href="">Contact</a>
    </nav>
  );
};

export default Heading;
