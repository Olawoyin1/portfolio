import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Practice/About/About';
import Contact from './Practice/Contact/Contact';
import Hero from './Practice/Main/Hero';
import Navbar from './Practice/Navbar/Navbar';
import Portfolio from './Practice/Portfolio/Portfolio';




function App() {

  const [toggle, setToggle] = React.useState(false)

  function handleToggle(){
    setToggle(!toggle)
  }

  return (
    <div className={toggle ? "body dark" : "body"}>
      <Navbar 
        toggle = {toggle}
        handleToggle = {handleToggle}
      />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
