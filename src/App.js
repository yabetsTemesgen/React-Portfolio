import React from "react";
import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Communicate from "./components/Communicate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (

    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Communicate />
      <ToastContainer/>
    </div>
  );
}

export default App;
