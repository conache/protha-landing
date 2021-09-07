import React from 'react';
import LogoNuclear from "../../assets/logo_nuclear.jpeg";
import LogoVexio from "../../assets/logo_vexio.png";
import LogoMercury from "../../assets/logo_mercury.jpg";
import LogoTrupa from "../../assets/logo_trupa.png";
import LogoConsiliulJudeteanVrancea from "../../assets/logo_cjv.png";

{/* Separat sectiunea Sponsori in Sponsor principal si Sponsor,
    Sters sponsori, cu exceptia Vexio, si adaugat sub forma de text "Altex Prod." */}

class Sponsors extends React.Component {
  render() {
    return [
      <div className="container custom-section">
      <div className="responsive-title custom-section-title">Festival organizat de</div>
      <div className="row justify-content-center d-flex flex-column align-items-center">
          <img className="col-lg-3 col-md-4 col-sm-7 col-xs-6 clickable-logo asociatie-logo" src={LogoTrupa} onClick={() => window.open("https://www.facebook.com/trupadeteatru.protha", "_blank")} />
          <div className="organiser-text clickable-logo" onClick={() => window.open("https://www.facebook.com/trupadeteatru.protha", "_blank")}>Asociatia Protha Panciu</div>
        </div>
    </div>,
    <div className="container custom-section">
      <div className="responsive-title custom-section-title">Realizat cu sprijinul</div>
      <div className="row justify-content-center">
        <img className="col-md-5 col-sm-10 col-xs-6 clickable-logo" src={LogoConsiliulJudeteanVrancea} onClick={() => window.open("https://cjvrancea.ro/", "_blank")} />
      </div>
    </div>,
    <div className="container custom-section">
      <div className="responsive-title custom-section-title">Sponsor principal</div>
        <div className="row justify-content-center">
          {/* 
          <img className="col-md-6 col-sm-10 col-xs-6 clickable-logo" src={LogoNuclear} onClick={() => window.open("https://www.nuclearelectrica.ro/", "_blank")} />
          */}
          <img className="col-md-5 col-sm-12 clickable-logo" src={LogoVexio} onClick={() => window.open("https://www.vexio.ro/", "_blank")} />

        </div>
        <div className="row d-flex justify-content-between align-items-center sponsors-secondary-row">
          {/*<img className="col-md-5 col-sm-12 clickable-logo" src={LogoMercury} onClick={() => window.open("https://mercury360.ro/", "_blank")} />*/}
        </div>
    <div >
      <div className="responsive-title custom-section-title">Sponsor</div>
      <div className="row justify-content-center">
          <div className="organiser-text">
            Altex Prod.
          </div>
        </div>
      </div>
    </div>
    
    ]
  }
}

export default Sponsors;
