import React, { useRef, useEffect } from 'react';
import { ReactComponent as Stars } from '../../assets/stars.svg';
import FestivalLogo from './FestivalLogo';
import Clouds from './Clouds';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InscrieriTrupaImg from '../../assets/inscrieri_trupa.png';
import InscrieriAtelierImg from '../../assets/inscrieri_atelier.png';
import InscrieriVoluntarImg from '../../assets/inscrieri_voluntar.png';
import AfisImg from '../../assets/afis_2023.jpeg';
import HartaZagaZaga from '../../assets/HartaZagaZagaSat.png';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
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
        <div className="logo-subtext" style={{ marginLeft: '10px', marginRight: '10px' }}>
          Vino alături de noi și fii tu însuți
        </div>
      </div>
      <Clouds />
      <div className="intro-section">
        <div id="intro-text" className="container intro-section-content d-lg-flex d-sm-block">
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Ce?</div>
            <div className="responsive-content">
              Festivalul de Teatru Tânăr “Ora de Teatru” așteaptă cu brațele deschise liceeni, atât
              din țară cât și din străinătate, care știu ce înseamnă scândura scenei, dar și pe cei
              curioși să privească scena ca spectatori. Alături de aceștia participă activ la
              festival copii și tinerii diagnosticați cu autism, cei cu deficiențe de auz și
              vorbire, precum și cei instituționalizați. Toți sunt incluși, toți sunt acceptați
              exact așa cum sunt și toți pleacă cu zâmbete.{' '}
              <span style={{ color: 'red' }}>test</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Cum?</div>
            <div className="responsive-content">
              Educația nonformală, terapia prin teatru și târgul de carte ne vor însoți timp de
              cinci zile, în cele zece locații ale festivalului. Vom fi noi cu noi, adică persoane
              cu aceleași valori și așteptări. Vom fi noi cu ei, cei care ne vor păși alături și ne
              vor împărtăși din pașii lor prin viață. Vom fi noi înșine fiindcă ne vom exprima așa
              cum suntem.
            </div>
          </div>
          <div className="col-md-12 col-lg-4 content-element">
            <div className="content-element-title responsive-title">Unde?</div>
            <div className="responsive-content">
              La noi acasă. La tine acasă. La prietenii tăi. În locuri noi pentru tine. Dar în
              locuri în care te vei simți ca la tine acasă. De la Zaga Zaga Sat către alte nouă
              localități din Vrancea va suna intrarea la "Ora de Teatru". Din sală în aer liber, din
              urban în rural, vom fi cât mai aproape de toți membrii comunităților pe unde vom
              ajunge.
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
            2023 - lăsă în urmă agitația și zgomotul orașelor și mută festivalul într-un loc unic
            din România, în Delta Siretului. Acolo unde brațele Siretului se ramifică și se risipesc
            peste o întindere nesfârșită formând o deltă impresionantă, de o frumusețe aparte.{' '}
            <a href="https://zagazaga.ro/" target="_blank">
              Zaga Zaga Sat
            </a>{' '}
            este locul unde vom fi de la răsărit la apus, timp de cinci zile, și ne vom bucura de
            spectacole de calitate, dar și de plimbări cu barca, cu căruța, de parcul de aventură și
            chiar de focul de tabără.{' '}
          </div>
        </div>
        <div className="col-lg-6 right-aligned middle-content">
          <div className="responsive-title">Hai să ne bucurăm de întâlnirea cu arta</div>
          <div className="responsive-content">
            Spectacole de teatru, coregrafie și muzică, expoziții de fotografie, scenografie și
            pictură, filme de scurt metraj, ateliere de teatru și relaționare, ateliere de gândire
            critică și inteligență emoțională, întâlniri cu personalități din teatru și mediul
            cultural, colocvii vocaționale și târgul de carte, toate în aer liber, într-un loc de o
            frumusețe tulburătoare, care devine târămul tinerilor.{' '}
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="responsive-title">Dă sfoară în țară</div>
          <div className="responsive-content">
            Ține aproape de noi, să vezi ce pregătim. Dă de știre colegilor și prietenilor tăi, că
            la{' '}
            <a href="https://zagazaga.ro/" target="_blank">
              Zaga Zaga
            </a>{' '}
            și în toată Vrancea, se va întâmpla ceva. Scrie-ne și spune-ne unde te regăsești în
            “ora” noastră. Și împreună vom da viața unei noi ediții a festivalului. E locul în care
            trebuie să fii anul acesta, fiindcă doar aici ești tu însuți.
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
        className="col-lg-6 col-md-10 col-sm-10 col-xs-10 clickable-logo"
        src={AfisImg}
        style={{ marginBottom: 100, marginTop: -100, maxWidth: '90%', height: 'auto' }}
        onClick={() => window.open('https://zagazaga.ro/ora-de-teatru-2022/', '_blank')}
      />
      <div className="Titlu-HartaZagaZagaSat">
        <div className="responsive-title" style={{ fontSize: '64px' }}>
          Hartă Zaga Zaga Sat
        </div>
      </div>
      <img
        className="col-lg-6 col-md-10 col-sm-10 col-xs-10"
        src={HartaZagaZaga}
        style={{ marginBottom: 100, marginTop: 20, maxWidth: '90%', height: 'auto' }}
      />
      {/*
      <div className="responsive-title" style={{ fontSize: '64px'}}>Înscrieri</div>
      <div className="container intro-section-content current-edition-section">
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <div className="col-lg-4">
            <div className='inscrieri-titlu-trupa'>
            <div className="responsive-title">Înscrie-te alături de trupa ta</div>
            </div>
            <div className='inscrieri-text-trupa'>
            <div className="responsive-content">
              <p>
                07/11 septembrie 2022, <a href="https://zagazaga.ro/" target="_blank">Zaga Zaga</a> e 
                perioada și locul în care poți arăta altora talentul tău și a colegilor de trupă. Te poți 
                înscrie până pe 7 august 2022, ce mai aștepți? Vino alături de noi!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdy6mr5zAdmQC2qv3Qbh8yQKdHiXKerfjsnAceIowEIzeV1kA/viewform"
                target="_blank"
              >
                Înscrie-te aici!
              </a>
            </div>
          </div>
          </div>
          <img className="col-lg-8 col-sm-12 mt-4" src={InscrieriTrupaImg} 
            style={{maxWidth:'90%', height: 'auto',   }}
            />
        </div>
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <img
            className="d-none d-sm-none d-xs-none d-md-none d-lg-block col-lg-7 col-sm-12 mt-4"
            src={InscrieriAtelierImg}
            style={{maxWidth:'90%', height: 'auto',  }}
          />
          <div className="col-lg-5 middle-content">
          <div className='inscrieri-title-ateliere'>
            <div className="responsive-title">Aplică pentru ateliere</div>
            </div>
            <div className='inscrieri-text-ateliere'>
            <div className="responsive-content">
              <p>
              Dacă ești liceean, din Focșani, Adjud, Mărășești, Panciu sau Vidra, aplică, până pe 7 august,
              fiindca vom fii acasă la tine si ne vom petrece timpul împreună. {' '}
              </p>
              <p>
              Dacă ești din apropiere, fă un pas, fiindcă ești binevenit.{' '}
              </p>
              <p>
              Dacă ești ceva mai de departe, adună-ți prietenii și colegii, aplicați, și o să venim la voi acasă.
              </p>
              <a
                href=" https://docs.google.com/forms/d/e/1FAIpQLSdZZ96vX1A8beqI_iAofznksF3qRm3rtau8RNpFlePnEnm-EA/viewform"
                target="_blank"
              >
                Aplică pentru ateliere!
              </a>
              </div>
            </div>
          </div>
          <img className="d-md-block d-lg-none col-lg-7 col-sm-12 mb-4" src={InscrieriAtelierImg} 
          style={{maxWidth:'90%', height: 'auto', }}
          />
        </div>
        <div className="col-lg-12 d-lg-flex flex-wrap align-items-center">
          <div className="col-lg-4">
            <div className='inscrieri-titlu-voluntari'>
            <div className="responsive-title">Vreau sa fiu voluntar</div>
            </div>
            <div className= 'inscrieri-text-voluntari'>
            <div className="responsive-content">
              <p>
                Dacă ești asertiv, respectuos, empatic, pozitiv, flexibil, atent, politicos și de
                încredere, ești partenerul nostru de drum.
              </p>
              <p>Vino alături de noi și împreună vom da viață unui festival dinamic. </p>
              <p>Aplică până pe 7 august 2022 și o să faci parte din echipa noastră. </p>
              <div className='motto'>Fii voluntar la "Ora de Teatru", fii tu însuți.</div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeujr5tBIxf5_74AT_nI56ujD9thcQoKzYJfJQRYoK3hTsbwg/viewform"
                target="_blank"
              >
                Aplică pentru voluntari!
              </a>
              </div>
            </div>
          </div>
          <img className="col-lg-7 col-sm-12 mt-4" src={InscrieriVoluntarImg} 
          style={{maxWidth:'90%', height: 'auto', }}/>
        </div>
      </div>
        */}
    </div>
  );
};

export default Intro;
