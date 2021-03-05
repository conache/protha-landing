import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = (props) => {
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".blue", {
        scrollTrigger: {
          trigger: ".about",
          start: "center center",
          end: "+=60px",
          markers: true,
          toggleActions: "play none none reverse",
        },
        xPercent: 100,
        duration: 2,
      });  
    }
  )
  

  return <div className="about">
    <div className="about-section red"></div>
    <div className="about-section blue"></div>
  </div>
}

export default About;
