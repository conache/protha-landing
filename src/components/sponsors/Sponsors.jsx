import React from 'react';
import LogoNuclear from "../../assets/logo_nuclear.jpeg";
import LogoVexio from "../../assets/logo_vexio.png";
import LogoMercury from "../../assets/logo_mercury.jpg";

class Sponsors extends React.Component {
  render() {
    return <div className="container custom-section">
      <div className="responsive-title custom-section-title">Sponsori</div>
        <div className="row justify-content-center">
          <img className="col-md-6 col-sm-10 col-xs-6" src={LogoNuclear} />
        </div>
        <div className="row d-flex justify-content-between align-items-center sponsors-secondary-row">
          <img className="col-md-5 col-sm-12" src={LogoVexio} />
          <img className="col-md-5 col-sm-12" src={LogoMercury} />
        </div>
    </div>
  }
}

export default Sponsors;
