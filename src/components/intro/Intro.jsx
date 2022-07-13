import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import FestivalLogo from './FestivalLogo';
import Clouds from './Clouds';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InscrieriTrupaImg from '../../assets/inscrieri_trupa.jpeg';
import InscrieriAtelierImg from '../../assets/inscrieri_atelier.jpeg';
import InscrieriVoluntarImg from '../../assets/inscrieri_voluntar.jpeg';
import AfisImg from '../../assets/afis.jpeg';

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
              vorbire, precum și cei instituționalizați. Toți sunt incluși, toți sunt acceptați exact 
              așa cum sunt și toți pleacă cu zâmbete.
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Cum?</div>
            <div className="responsive-content">
            Educația nonformală, terapia prin teatru și târgul de carte ne vor însoți timp de cinci zile, 
            în cele zece locații ale festivalului. Vom fi noi cu noi, adică persoane cu aceleași valori și 
            așteptări. Vom fi noi cu ei, cei care ne vor păși alături și ne vor împărtăși din pașii lor 
            prin viață.  Vom fi noi înșine fiindcă ne vom exprima așa cum suntem.
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Unde?</div>
            <div className="responsive-content">
            La noi acasă. La tine acasă. La prietenii tăi. În locuri noi pentru tine. Dar în locuri în care 
            te vei simți ca la tine acasă. De la Zaga Zaga Sat către alte nouă localități din Vrancea va 
            suna intrarea la "Ora de Teatru". Din sală în aer liber, din urban în rural, vom fi cât mai 
            aproape de toți membrii comunităților pe unde vom ajunge.
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
          2022 - lăsă în urmă agitația și zgomotul orașelor și mută festivalul într-un loc unic din 
          România, în Delta Siretului. Acolo unde brațele Siretului se ramifică și se risipesc peste 
          o întindere nesfârșită formând o deltă impresionantă, de o frumusețe aparte. <a href="https://zagazaga.ro/" target="_blank">Zaga Zaga Sat</a> este 
          locul unde vom fi de la răsărit la apus, timp de cinci zile, și ne vom bucura de 
          spectacole de calitate, dar și de plimbări cu barca, cu căruța, de parcul de aventură și chiar 
          de focul de tabără.{' '}
          </div>
        </div>
        <div className="col-lg-6 right-aligned middle-content">
          <div className="responsive-title">Hai să ne bucurăm de întâlnirea cu arta</div>
          <div className="responsive-content">
          Spectacole de teatru, coregrafie și muzică, expoziții de fotografie, scenografie și pictură, filme de scurt metraj, 
          ateliere de teatru și relaționare, ateliere de gândire critică și inteligență emoțională, întâlniri cu personalități 
          din teatru și mediul cultural, colocvii vocaționale și târgul de carte, toate în aer liber, într-un loc de o 
          frumusețe tulburătoare, care devine târămul tinerilor.{' '}
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="responsive-title">Dă sfoară în țară</div>
          <div className="responsive-content">
          Ține aproape de noi, să vezi ce pregătim. Dă de știre colegilor și prietenilor tăi, că 
          la <a href="https://zagazaga.ro/" target="_blank">Zaga Zaga</a> și în toată Vrancea, se va întâmpla ceva. Scrie-ne și spune-ne unde te 
          regăsești în “ora” noastră. Și împreună vom da viața unei noi ediții a festivalului. 
          E locul în care trebuie să fii anul acesta, fiindcă doar aici ești tu însuți.
          </div>
          {/*
          </div>
          <div className="col-lg-6 right-aligned middle-content">
          <div className="responsive-title">Ai vrea sa ne ajuti?</div>
          <div className="responsive-content">
            Daca vrei sa ne ajuti poti dona miste bani catre PayPalOraDeTeatruLink. In functie de
            suma donata poti primi niste premii. {' '}
          </div>
          */}
        </div>
      </div>
      <img
        className="col-lg-6 col-md-10 col-sm-10 col-xs-10"
        src={AfisImg}
        style={{ marginBottom: 200, maxWidth: '90%', height:'auto',  }}
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
