import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Hero from './Practice/Main/Hero';
import Navbar from './Practice/Navbar/Navbar';




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
    </div>
  );
}

export default App;
