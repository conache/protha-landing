import React from 'react';
import Intro from './intro/Intro';
import About from './about/About';
import Program from './program/Program';
import Sponsors from './sponsors/Sponsors';
import Contact from './contact/Contact';
import Navbar from './nav/Navbar';

const Application = () => {
  return (
    <div>
      <Navbar minYOffset={750} />
      <Intro />
      <About />
      <Program />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Application;
