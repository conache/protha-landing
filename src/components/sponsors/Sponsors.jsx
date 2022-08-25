import React from 'react';
import LogoNuclear from "../../assets/logo_nuclear.jpeg";
import LogoVexio from "../../assets/logo_vexio.png";
import LogoMercury from "../../assets/logo_mercury.jpg";
import LogoTrupa from "../../assets/logo_trupa.png";
import LogoConsiliulJudeteanVrancea from "../../assets/NewLogoCJV.jpg";
import LogoZagaZaga from "../../assets/logo-ZagaZagaSat.png";
import LogoGrupAutonom from "../../assets/LogoGrupAutonom.png";
import LogoBTD from "../../assets/btdLogo.png";
import LogoLaBunelu from "../../assets/LogoLaBunelu.jpg"
import LogoPaco from "../../assets/LogoPaco.png";
import LogoRobutex from "../../assets/LogoRobutex.jpeg";
import LogoSculePanciu from "../../assets/LogoSculePanciu.png"


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
          <img className="col-md-5 col-sm-12 clickable-logo" src={LogoVexio} onClick={() => window.open("https://www.vexio.ro/", "_blank")} />
          <img className="col-md-5 col-sm-12 clickable-logo" src={LogoZagaZaga} onClick={() => window.open("https://zagazaga.ro/", "_blank")} />
          */}
          <img className="col-md-5 col-sm-12 clickable-logo" style={{ marginBottom: 30, maxWidth: '80%', height:'80%',  }} 
              src={LogoZagaZaga} onClick={() => window.open("https://zagazaga.ro/ora-de-teatru-2022/", "_blank")} />
        </div>
        <div className="row d-flex justify-content-between align-items-center sponsors-secondary-row">
          {/*<img className="col-md-5 col-sm-12 clickable-logo" src={LogoMercury} onClick={() => window.open("https://mercury360.ro/", "_blank")} />*/}
        </div>
    <div >
    <div className="responsive-title custom-section-title">Sponsori</div>
    <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoBTD} onClick={() => window.open("https://www.btdconstruct.ro/", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoPaco} onClick={() => window.open("https://pacomarket.ro/", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoVexio} onClick={() => window.open("https://www.vexio.ro/", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      <div >
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoGrupAutonom} onClick={() => window.open("https://www.autonom.com/about", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoSculePanciu} onClick={() => window.open("http://www.sculepanciu.com/", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoLaBunelu} onClick={() => window.open("https://www.facebook.com/profile.php?id=100067471712726", "_blank")} 
            style={{ marginBottom: 75, maxWidth: '65%', height:'auto'}}/>
      </div>
      <div className="row justify-content-center">
      <img className="col-md-5 col-sm-12 clickable-logo" src={LogoRobutex} onClick={() => window.open("http://www.robutex.ro/", "_blank")} 
            style={{ marginBottom: 75}}/>
      </div>
      </div>
    </div>
  </div>
    
    ]
  }
}

export default Sponsors;
