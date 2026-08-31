// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Routes, Route } from "react-router-dom";

import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
   <><Navbar /> <Hero /> <About /> <Skills /> <Experiences /> <Projects /> <Contact /></> 

  );
}

export default App