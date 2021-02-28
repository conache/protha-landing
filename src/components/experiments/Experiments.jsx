import React, { useRef, useEffect } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import {TweenMax, Power3} from "gsap";
import {gsap} from "gsap";

const experiments = props => {
  let logoIcon = useRef(null)

  console.log(logoIcon);
  useEffect(() => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".b",
            start: "-20px center",
            scrub: 2,
            pin: true,
            markers: true,
        },
    });
    
    tl.to(".b", {
        x: 400,
        rotation: 360,
        ease: "none",
        duration: 3,
      }
    )
  
}, []);

  return [
      <div className="box a"></div>,
      <div className="box b"></div>,
      <div className="box c"></div>
  ]    
};

export default experiments;
