import React from "react"; 
import StartPage from "./components/StartPage/StartPage";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div>
      <StartPage />
      <About />
      <Project />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;