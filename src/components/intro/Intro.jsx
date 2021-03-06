import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import FestivalLogo from "./FestivalLogo";
import Clouds from "./Clouds";
import {gsap, Power1} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Intro = props => {
  const hl_1 = useRef();
  const hl_2 = useRef();

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
    });
    gsap.to("#intro-text", {
      scrollTrigger: {
        trigger: "#intro-text",
        start: "-100px center",
        markers: true,
      },
      opacity: 1,
      duration: 2,
    });
    gsap.fromTo(hl_1.current, {x: window.innerWidth}, {
      scrollTrigger: {
        trigger: ".full-width-image",
        start: "top center",
        scrub: 2,
        // markers: true,
      },
      x: -1 * hl_1.current.scrollWidth,
    });
    gsap.fromTo(hl_2.current, {x: - hl_2.current.scrollWidth - window.innerWidth}, {
    scrollTrigger: {
        trigger: ".full-width-image",
        start: "10% center",
        scrub: 2,
        // markers: true,
      },
      x: 0,
    });
  });

  return (
    <div className="intro night-section">
      <Stars className="stars"/>
      <div className="logo-container" >
        <FestivalLogo />
        <div className="logo-subtext">Vino alături de noi și fii tu însuți</div>
      </div>
      <Clouds />
      <div className="intro-section">
        <div id="intro-text" className="container intro-section-content d-lg-flex d-sm-block">
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Ce?</div>
            <div className="responsive-content">Festivalul de Teatru Tânăr “Ora de Teatru” este rezultatul orelor petrecute pe scenă, din 2011 până astăzi, a multor generații de liceeni din Panciu, dar și a participărilor în festivaluri naționale și internaționale de teatru.</div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Cum?</div>
            <div className="responsive-content">Așteptăm cu brațele deschise liceeni, atatât din țară și străinătate, care știu ce înseamnă scândura scenei, dar și pe cei curioși să privească scena ca și spectatori. Alături de aceștia participă activ la festival copii și tinerii diagnosticați cu autism, cei cu deficiențe de auz și vorbire, precum și cei instituționalizați.</div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
          <div className="content-element-title responsive-title">Unde?</div>
            <div className="responsive-content">Festivalul de Teatru Tânăr “Ora de Teatru” este rezultatul orelor petrecute pe scenă, din 2011 până astăzi, a multor generații de liceeni din Panciu, dar și a participărilor în festivaluri naționale și internaționale de teatru.</div>
          </div>
        </div>
      </div>
      
      <div ref={hl_1} id="horizontal-tl-1" className="horizontal-text-line">Voluntariat.Familie.Distractie.Bucurie.Joc.Învățături.Împlinire.Amintiri.Speranță.Reușită.Interacțiuni.Provocări.Legături.Creativitate.Cunoștințe.Teatru.Valorizare.Autocunoaștere.Copilărie.Acceptare.Diversitate.Incluziunie</div>
      <div id="img1" className="full-width-image" />
      <div ref={hl_2} id="horizontal-tl-2" className="horizontal-text-line">Voluntariat.Familie.Distractie.Bucurie.Joc.Învățături.Împlinire.Amintiri.Speranță.Reușită.Interacțiuni.Provocări.Legături.Creativitate.Cunoștințe.Teatru.Valorizare.Autocunoaștere.Copilărie.Acceptare.Diversitate.Incluziunie</div>

      <div className="container intro-section-content current-edition-section">
        <div className="col-lg-6">
          <div className="responsive-title">Ți-am pregătit o mulțime de surprize</div>
          <div className="responsive-content">2021 – este anul în care pășim împreună pe drumul pe care am plecat, ducem “ora de teatru” pretutindeni și oferim o fărâmă de cultură. Ne găsim la sfârșit de vara sau la început de toamnă, sub cerul liber, bucurându-ne de reîntâlnire și de noi experiențe.</div>
        </div>
        <div className="col-lg-6 right-aligned middle-content">
          <div className="responsive-title">Hai să ne bucurăm întâlnirea cu teatrul</div>
          <div className="responsive-content">Dacă ești liceean, din țară sau din diaspora, dacă locuiești în mediul rural sau urban, dacă vrei să te bucuri de întâlnirea cu teatrul, ai locul tău alături de noi. Pe scândura scenei, la ateliere, ca spectator sau ca voluntar, te lăsăm pe tine să alegi. </div>
        </div>
        <div className="col-lg-6">
          <div className="responsive-title">Dă sfoară în țară</div>
          <div className="responsive-content">Ține aproape de noi, să vezi ce pregătim. Dă de știre colegilor și prietenilor tăi, că la Focșani și în toată Vrancea, la ceas de pandemie se v-a întâmpla ceva. Scrie-ne și spune-ne unde te regăsești în “ora” noastră. Și împreună vom da viața unei noi ediții a festivalului.</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
