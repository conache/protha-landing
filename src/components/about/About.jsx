import React, { useEffect } from 'react';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = (props) => {
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const scrollTrigger = {
        trigger: ".about",
        start: "40% center",
        end: "+=60px",
        markers: true,
      };

      gsap.timeline({scrollTrigger, repeat: -1, repeatDelay: 2, yoyo: true,})
        .to("#about-img-4", {xPercent: 100, duration: 2, ease: Power1.easeIn})
        .to("#about-img-3", {delay: 2, xPercent: -100, duration: 2, ease: Power1.easeIn})
        .to("#about-img-2", {delay: 2, xPercent: 100, duration: 2, ease: Power1.easeIn})
    }
  )
  

  return <div className="about">
    <div id="about-img-1" className="showcase-img" />
    <div id="about-img-2" className="showcase-img" />
    <div id="about-img-3" className="showcase-img" />
    <div id="about-img-4" className="showcase-img " />
  </div>
}

export default About;
