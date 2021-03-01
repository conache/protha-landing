import React, { useEffect } from "react";
import { ReactComponent as CloudsSVG } from "../../assets/clouds.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Clouds = () => {
    useEffect(() => {
        const scrollTrigger = {
            trigger: ".clouds",
            start: "50% center",
            end: "+=200",
            scrub: 2,
            pin: true,
            pinSpacing: false,
            markers: true,
        };

        // To right
        gsap.to(["#cloud-1", "#cloud-4"], {
            scrollTrigger: scrollTrigger,
            xPercent: 100,
            opacity: 0,
            duration: 1,
        });
        
        // To left
        gsap.to(["#cloud-2", "#cloud-3"], {
            scrollTrigger: scrollTrigger,
            xPercent: -100,
            opacity: 0,
            duration: 1,
        })
    });

    return  <CloudsSVG className="clouds" />;
}

export default Clouds;