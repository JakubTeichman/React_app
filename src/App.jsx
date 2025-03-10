import React from "react"; 
import StartPage from "./components/StartPage/StartPage";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Info from "./components/Info/Info";

const App = () => {
  return (
    <div>
      <StartPage />
      <About />
      <Project />
      <Info />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;