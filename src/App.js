import React, { Suspense } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Loading from './Practice/Loading';
// import About from './Practice/About/About';
// import Contact from './Practice/Contact/Contact';
// import Hero from './Practice/Main/Hero';
// import Navbar from './Practice/Navbar/Navbar';
// import Portfolio from './Practice/Portfolio/Portfolio';
const Navbar = React.lazy(()=>import("./Practice/Navbar/Navbar"))
const Hero = React.lazy(()=>import("./Practice/Main/Hero"))
const About = React.lazy(()=>import("./Practice/About/About"))
const Portfolio = React.lazy(()=>import("./Practice/Portfolio/Portfolio"))
const Contact = React.lazy(()=>import("./Practice/Contact/Contact"))




function App() {

  const [toggle, setToggle] = React.useState(false)

  function handleToggle(){
    setToggle(!toggle)
  }

  return (
    <div className={toggle ? "body dark" : "body"}>
      <Suspense fallback={<Loading />}>
        <Navbar 
          toggle = {toggle}
          handleToggle = {handleToggle}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
      {/* <Loading /> */}
    </div>
  );
}

export default App;
