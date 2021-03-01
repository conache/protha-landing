import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import FestivalLogo from "./FestivalLogo";
import Clouds from "./Clouds";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Intro = props => {
  useEffect(() => {
    gsap.to(".stars", {
      scrollTrigger: {
        trigger: ".stars",
        end: "+=500px",
        pin: true,
        pinSpacing: false,
        scrub: 2,
      },
      opacity: 0,
    })
  });

  return (
    <div className="intro night-section">
      <Stars className="stars"/>
      <div className="logo-container" >
        <FestivalLogo />
        <div>Vino alături de noi și fii tu însuți</div>
      </div>
      <Clouds />  
      <div className="placeholder-content">
      </div>
    </div>
  );
};

export default Intro;
