import React from 'react';
import LogoVexio from '../../assets/logo_vexio.png';
import LogoTrupa from '../../assets/logo_trupa.png';
import LogoConsiliulJudeteanVrancea from '../../assets/NewLogoCJV.jpg';
import LogoZagaZaga from '../../assets/logo-ZagaZagaSat.png';
import LogoGrupAutonom from '../../assets/LogoGrupAutonom.png';
import LogoLaBunelu from '../../assets/LogoLaBunelu.jpg';
import LogoRobutex from '../../assets/LogoRobutex.jpeg';
import LogoSculePanciu from '../../assets/LogoSculePanciu.png';
import LogoBeciulDomnesc from '../../assets/LogoBeciulDomnesc.jpeg';
import LogoMarco from '../../assets/LogoMarco.jpeg';
import LogoFlorariaMaruca from '../../assets/LogoFlorariaMaruca.png';
import LogoLupinocom from '../../assets/LogoLupinocom.png';
import LogoPlexity from '../../assets/LogoPlexity.png';
import LogoCramaValentePanciu from '../../assets/LogoCramaValentePanciu.png';
import LogoGradinaCuCamelii from '../../assets/GradinaCuCamelii.jpeg';
import LogoCosmeticBYBCars from '../../assets/LogoCosmeticBYBCars.png';
import LogoTricottonJunior from '../../assets/LogoTricottonJunior.png';
import LogoIdnaPower from '../../assets/logo_idnapower.png';
import LogoMetinox from '../../assets/logo_metinox.png';
import LogoDepozitMovilita from '../../assets/logo_depozit_movilita.png';
import LogoCarturesti from '../../assets/logo_carturesti.png';
import LogoArtesana from '../../assets/logo_artesana.png';
import LogoNiculescu from '../../assets/logo_niculescu.png';
import LogoAna from '../../assets/logo_ana.png';
import LogoAutoPascu from '../../assets/logo_autopascu.png';
import LogoHumanitas from '../../assets/logo_humanitas.png';
import LogoRikora from '../../assets/logo_rikora.png';
import LogoMosia from '../../assets/logo_mosia.png';


class Sponsors extends React.Component {
  render() {
    return [
      <div className="container custom-section">
        <div className="responsive-title custom-section-title">Host</div>
        <div className="row justify-content-center d-flex flex-column align-items-center">
          <img
            className="col-lg-3 col-md-4 col-sm-7 col-xs-6 clickable-logo asociatie-logo"
            src={LogoTrupa}
            onClick={() => window.open('https://www.facebook.com/trupadeteatru.protha', '_blank')}
          />
          <div
            className="organiser-text clickable-logo"
            onClick={() => window.open('https://www.facebook.com/trupadeteatru.protha', '_blank')}
          >
            Asociatia Protha Panciu
          </div>
        </div>
      </div>,
      <div className="container custom-section">
        <div className="responsive-title custom-section-title">Co-Host</div>
        <div className="row justify-content-center">
          {/* 
          <img className="col-md-6 col-sm-10 col-xs-6 clickable-logo" src={LogoNuclear} onClick={() => window.open("https://www.nuclearelectrica.ro/", "_blank")} />
          <img className="col-md-5 col-sm-12 clickable-logo" src={LogoVexio} onClick={() => window.open("https://www.vexio.ro/", "_blank")} />
          <img className="col-md-5 col-sm-12 clickable-logo" src={LogoZagaZaga} onClick={() => window.open("https://zagazaga.ro/", "_blank")} />
          */}
          <img
            className="col-md-5 col-sm-12 clickable-logo"
            style={{ marginBottom: 30, maxWidth: '80%', height: '80%' }}
            src={LogoZagaZaga}
            onClick={() => window.open('https://zagazaga.ro/ora-de-teatru-2022/', '_blank')}
          />
        </div>
        <div className="row d-flex justify-content-between align-items-center sponsors-secondary-row">
          {/*<img className="col-md-5 col-sm-12 clickable-logo" src={LogoMercury} onClick={() => window.open("https://mercury360.ro/", "_blank")} />*/}
        </div>
        <div>
          <div className="container custom-section">
            <div className="responsive-title custom-section-title">Realizat cu sprijinul</div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-10 col-xs-6 clickable-logo"
                src={LogoConsiliulJudeteanVrancea}
                onClick={() => window.open('https://cjvrancea.ro/', '_blank')}
              />
            </div>
          </div>
          ,<div className="responsive-title custom-section-title">Sponsori</div>

          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoDepozitMovilita}
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=100063462881660',
                  '_blank',
                )
              }
              style={{ marginBottom: -100, marginTop: -70 }}
            />
          </div>

          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoIdnaPower}
              onClick={() =>
                window.open(
                  'https://idnasolarpower.ro/',
                  '_blank',
                )
              }
              style={{ marginBottom: -100, marginTop: 70 }}
            />
          </div>

          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoMetinox}
              onClick={() =>
                window.open(
                  'https://metinoxpvm.com/',
                  '_blank',
                )
              }
              style={{ marginBottom: -100, marginTop: -50 }}
            />
          </div>

          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoBeciulDomnesc}
              onClick={() =>
                window.open(
                  'https://beciuldomnesc.ro/?gclid=CjwKCAjw3qGYBhBSEiwAcnTRLl5tGepAjm3VTams6fHsetx18uxjXg4CoHSYF94qYpZlam9zXpVVSRoCG_8QAvD_BwE',
                  '_blank',
                )
              }
              style={{ marginBottom: 75 }}
            />
          </div>
          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoTricottonJunior}
              onClick={() =>
                window.open(
                  'http://www.tricotton.ro/',
                  '_blank',
                )
              }
              style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
            />
          </div>
          <div className="row justify-content-center">
            <img
              className="col-md-5 col-sm-12 clickable-logo"
              src={LogoVexio}
              onClick={() => window.open('https://www.vexio.ro/', '_blank')}
              style={{ marginBottom: 75 }}
            />
          </div>
          <div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoGrupAutonom}
                onClick={() => window.open('https://www.autonom.com/about', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoSculePanciu}
                onClick={() => window.open('http://www.sculepanciu.com/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoLupinocom}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoCarturesti}
                onClick={() => window.open('https://carturesti.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoArtesana}
                onClick={() => window.open('https://artesana.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoRikora}
                onClick={() => window.open('https://www.facebook.com/RikoraFLM', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoMosia}
                onClick={() => window.open('https://mosiadomneasca.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>
            
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoNiculescu}
                onClick={() => window.open('https://www.niculescu.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoAna}
                onClick={() => window.open('https://anaare.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoAutoPascu}
                onClick={() => window.open('https://autopascu99.ro/', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoHumanitas}
                onClick={() => window.open('https://www.facebook.com/profile.php?id=100092492076024', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>

            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoMarco}
                onClick={() => window.open('https://www.facebook.com/BrutariaMarco', '_blank')}
                style={{ marginBottom: 75 }}
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoLaBunelu}
                onClick={() =>
                  window.open('https://www.facebook.com/profile.php?id=100067471712726', '_blank')
                }
                style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoCramaValentePanciu}
                onClick={() =>
                  window.open('https://www.facebook.com/profile.php?id=100067187064281', '_blank')
                }
                style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
              />
            </div>
            <div className="row justify-content-center">
              <img className="col-md-5 col-sm-12 clickable-logo"  src={LogoPlexity} style={{ marginBottom: 75 }} />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoFlorariaMaruca}
                onClick={() =>
                  window.open('https://www.facebook.com/florariamarucapanciu', '_blank')
                }
                style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoGradinaCuCamelii}
                style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
                onClick={() =>
                  window.open('https://www.facebook.com/gradinacucamelii', '_blank')
                }
              />
            </div>
            <div className="row justify-content-center">
              <img
                className="col-md-5 col-sm-12 clickable-logo"
                src={LogoCosmeticBYBCars}
                style={{ marginBottom: 75, maxWidth: '65%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

export default Sponsors;
