import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import { ReactComponent as Clouds} from "../../assets/clouds.svg";
import FestivalLogo from "../logo/FestivalLogo";
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
        scrub: 2,
        markers: true,
      },
      opacity: 0,
    })
  });

  return (
    <div className="intro night-section">
      <Stars className="stars"/>
      <div className="section-content-wrapper">
        <div className="logo-container">
          <FestivalLogo className="festival-logo"/>
          <Clouds className="clouds"/>
        </div>
        <div className="placeholder-content">
        </div>
      </div>
    </div>
  );
};

export default Intro;
