import React from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Intro from './intro/Intro';
import Partners from './partners/Partners';
import Sponsors from './sponsors/Sponsors';
import Team from "./team/Team";


const Application = () => {
  return [
    <div className="highlighted-content-wrapper">
      <Intro />
      <About />
      <div className="white-backgrounded">
        <Sponsors />
        <Partners />
      </div>
      <Contact />
    </div>,
    <Team />
  ]
};

export default Application;
