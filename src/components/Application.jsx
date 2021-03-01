import React from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Intro from './intro/Intro';
import Partners from './partners/Partners';
import Sponsors from './sponsors/Sponsors';


const Application = () => {
  return [
      <Intro />,
      <About />,
      <Sponsors />,
      <Partners />,
      <Contact />
  ]
};

export default Application;
