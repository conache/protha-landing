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
      <Intro id="intro" className="intro" />
      <About id="about" className="about" />
      <Program id="program" className="program" />
      <Sponsors id="sponsors" className="sponsors" />
      <Contact id="contact" className="contact" />
    </div>
  );
};

export default Application;
