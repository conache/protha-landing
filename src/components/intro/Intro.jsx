import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import FestivalLogo from './FestivalLogo';
import Clouds from './Clouds';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InscrieriTrupaImg from '../../assets/inscrieri_trupa.jpeg';
import InscrieriAtelierImg from '../../assets/inscrieri_atelier.jpeg';
import InscrieriVoluntarImg from '../../assets/inscrieri_voluntar.jpeg';
import AfisImg from '../../assets/afis-nou-2022.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Intro = props => {
  const hl_1 = useRef();
  const hl_2 = useRef();

  useEffect(() => {
    gsap.to('.stars', {
      scrollTrigger: {
        trigger: '.stars',
        end: '+=500px',
        pin: true,
        pinSpacing: false,
        scrub: 2,
      },
      opacity: 0,
    });
    gsap.to('#intro-text', {
      scrollTrigger: {
        trigger: '#intro-text',
        start: '-100px center',
        // markers: true,
      },
      opacity: 1,
      duration: 2,
    });

    const horizontalScrollTrigger = {
      trigger: '.full-width-image',
      start: '-150px center',
    };
    const tl_1 = gsap
      .timeline({ yoyo: true, scrollTrigger: horizontalScrollTrigger, repeat: -1 })
      .fromTo(
        hl_1.current,
        { x: window.innerWidth },
        { x: -1 * hl_1.current.scrollWidth + window.innerWidth, duration: 60 },
      );
    const tl_2 = gsap
      .timeline({ yoyo: true, scrollTrigger: horizontalScrollTrigger, repeat: -1 })
      .fromTo(hl_2.current, { x: -hl_2.current.scrollWidth }, { x: 0, duration: 60 });
  });

  return (
    <div className="intro night-section">
      <Stars className="stars" />
      <div className="logo-container">
        <FestivalLogo />
        <div className="logo-subtext">Vino alături de noi și fii tu însuți</div>
      </div>
      <Clouds />
      <div className="intro-section">
        <div id="intro-text" className="container intro-section-content d-lg-flex d-sm-block">
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Ce?</div>
            <div className="responsive-content">
              Festivalul de Teatru Tânăr “Ora de Teatru” așteaptă cu brațele deschise liceeni, atât
              din țară cât și din străinătate, care știu ce înseamnă scândura scenei, dar și pe cei
              curioși să privească scena ca și spectatori. Alături de aceștia participă activ la
              festival copii și tinerii diagnosticați cu autism, cei cu deficiențe de auz și
              vorbire, precum și cei instituționalizați.
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Cum?</div>
            <div className="responsive-content">
              Ne concentrăm pe educația alternativă prin teatru. În patru zile dinamice avem grijă
              să aducem oameni pregătiți pentru a susține ateliere în toate cele nouă locații de
              desfășurare a festivalului. Descoperim luptele scenice, improvizația, muzica și
              ritmul. În plus, copiii instituționalizați au parte de surprize plăcute și creative.
              Toți sunt incluși, toți sunt acceptați exact așa cum sunt și toți pleacă cu zâmbete.
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Unde?</div>
            <div className="responsive-content">
              La noi acasa. La tine acasa. La prietenii tai. În locuri noi pentru tine. Dar in
              locuri in care te vei simti ca la tine acasa. Vor fi cel puțin nouă localități, din
              Vrancea, în care va suna intrarea la “Ora de Teatru”. De la Focșani către cele mai
              îndepărtate colțuri ale județului vom fi cu toții acasă. Intrarea la ora va fi de
              acasă, în schimb, de data asta vom fi prezenți și nu online.
            </div>
          </div>
        </div>
      </div>

      <div ref={hl_1} id="horizontal-tl-1" className="horizontal-text-line">
        Voluntariat Familie Distractie Bucurie Joc Învățături Împlinire Amintiri Speranță Reușită
        Interacțiuni Provocări Legături Creativitate Cunoștințe Teatru Valorizare Autocunoaștere
        Copilărie Acceptare Diversitate Incluziune
      </div>
      <div id="img1" className="full-width-image" />
      <div ref={hl_2} id="horizontal-tl-2" className="horizontal-text-line">
        Voluntariat Familie Distractie Bucurie Joc Învățături Împlinire Amintiri Speranță Reușită
        Interacțiuni Provocări Legături Creativitate Cunoștințe Teatru Valorizare Autocunoaștere
        Copilărie Acceptare Diversitate Incluziune
      </div>

      <div className="container intro-section-content current-edition-section">
        <div className="col-lg-6">
          <div className="responsive-title">Ți-am pregătit o mulțime de surprize</div>
          <div className="responsive-content">
            2021 – este anul în care pășim împreună pe drumul pe care am plecat, ducem “ora de
            teatru” pretutindeni și oferim o fărâmă de cultură. Ne găsim la sfârșit de vara sau la
            început de toamnă, sub cerul liber, bucurându-ne de reîntâlnire și de noi experiențe.
          </div>
        </div>
        <div className="col-lg-6 right-aligned middle-content">
          <div className="responsive-title">Hai să ne bucurăm de întâlnirea cu teatrul</div>
          <div className="responsive-content">
            Dacă ești licean, din țară sau din diaspora, dacă locuiești în mediul rural sau urban,
            dacă vrei să te bucuri de întâlnirea cu teatrul, ai locul tău alături de noi. Pe
            scândura scenei, la ateliere, ca spectator sau ca voluntar, te lăsăm pe tine să alegi.{' '}
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="responsive-title">Dă sfoară în țară</div>
          <div className="responsive-content">
            Ține aproape de noi, să vezi ce pregătim. Dă de știre colegilor și prietenilor tăi, că
            la Focșani și în toată Vrancea, la ceas de pandemie se va întâmpla ceva. Scrie-ne și
            spune-ne unde te regăsești în “ora” noastră. Și împreună vom da viața unei noi ediții a
            festivalului.
          </div>
        </div>
      </div>
      <img
        className="col-lg-6 col-md-10 col-sm-10 col-xs-10"
        src={AfisImg}
        style={{ marginBottom: 200 }}
      />

      {/*  Comentant sectiunea cu inscrieri

      <div className="responsive-title">Înscrieri</div>

      <div className="container intro-section-content current-edition-section ">
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <div className="col-lg-4">
            <div className="responsive-title">Inscrie-te alături de trupa ta</div>
            <div className="responsive-content">
              <p>
                02 / 05 septembrie 2021 Focsani e perioada si locul in care poti arata altora
                talentul tau si a colegilor de trupa. pana pe 28 august 2021 aplicatia te asteapta,
                sa faci pasul.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfUZQjnav5dlBSNvFDZzS41cvsJrH4b2xScV_6NMqr_m5AT4g/viewform?fbclid=IwAR2tAoWmRFKgcdRHjpEIwr3jviopoQ_ayrS7ObO13azReZvE2J7oRyTy-YA"
                target="_blank"
              >
                Înscrie-te aici
              </a>
            </div>
          </div>
          <img className="col-lg-8 col-sm-12 mt-4" src={InscrieriTrupaImg} />
        </div>
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <img
            className="d-none d-sm-none d-xs-none d-md-none d-lg-block col-lg-7 col-sm-12 mt-4"
            src={InscrieriAtelierImg}
          />
          <div className="col-lg-5 middle-content">
            <div className="responsive-title">Aplică pentru ateliere</div>
            <div className="responsive-content">
              <p>
                Daca esti liceean, din Odobesti, Panciu sau Vidra, aplica, pana pe 28 august,
                fiindca pe 02 si 03.09.2021 vom fi acasa la tine si ne vom petrece timpul impreuna.{' '}
              </p>
              <p>
                Daca esti din alte localitati din apropierea celor mentionate te asteptam in acestea
                alaturi de noi. Daca esti din alta localitate, mai indepartata, aplica si vedem cati
                va strangeti si venim si la voi acasa.{' '}
              </p>
              <p>Haide sa ne petrecem impreuna timpul in 02 si 03.09.2021, la tine acasa.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKGMolW_qlyhecd31gs_gx2yz14LztAvHuKkkfLAzobER-GA/viewform?fbclid=IwAR2OfqB6d7HO4MZuIROcwHr8paOTIDD1DSwbI-dEusCEyB6iGHLfeTSCvi8"
                target="_blank"
              >
                Aplică pentru ateliere
              </a>
            </div>
          </div>
          <img className="d-md-block d-lg-none col-lg-7 col-sm-12 mb-4" src={InscrieriAtelierImg} />
        </div>
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <div className="col-lg-4">
            <div className="responsive-title">Vreau sa fiu voluntar</div>
            <div className="responsive-content">
              <p>
                Dacă ești asertiv, respectuos, empatic, pozitiv, flexibil, atent, politicos și de
                încredere, ești partenerul nostru de drum.
              </p>
              <p>Vino alături de noi și împreună vom da viață unui festival dinamic. </p>
              <p>Aplică până pe 28 august 2021 și faci parte din echipa noastră. </p>
              <p>Fii voluntar la "Ora de Teatru", fii tu însuți.</p>
            </div>
          </div>
          <img className="col-lg-7 col-sm-12 mt-4" src={InscrieriVoluntarImg} />
        </div>
      </div>
      */}
    </div>
  );
};

export default Intro;
