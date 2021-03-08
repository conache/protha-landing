import React from 'react';
import PrimariaFocsani from "../../assets/primaria_focsani.png";
import PrimariaAdjud from "../../assets/primaria_adjud.png";
import PriamariaVidra from "../../assets/primaria_vidra.png";
import PrimariaMarasesti from "../../assets/primaria_marasesti.png";
import PrimariaDumbraveni from "../../assets/primaria_dumbraveni.png";
import PrimariaDumitresti from "../../assets/primaria_dumitresti.png"
import PrimariaOdobesti from "../../assets/primaria_odobesti.jpg";
import PrimariaPanciu  from "../../assets/primaria_panciu.png";
import EmilBotaAdjud from "../../assets/emil_bota_adjud.png";
import UnireaFocsani from "../../assets/unirea_focsani.png";
import EremiaGrigorescuMarasesti from "../../assets/eremia_grigorescu_marasesti.jpg";
import SimionMehedintiVidra from "../../assets/simion_mehedinti_vidra.jpg";
import GrigoreGhebaDumitresti from "../../assets/grigore_gheba_dumitresti.png";
import LisPanciu from "../../assets/lis.jpg";
import AnsamblulTaraVrancei from "../../assets/ansamblul_tara_vrancei.png";
import AteneulPopularPastia from "../../assets/ateneul_popular_pastia.png";
import CasaCulturaOdobesti from "../../assets/casa_cultura_odobesti.png";
import CasaCulturaPanciu from "../../assets/casa_cultura_panciu.jpg";
import CentrulElenaDoamna from "../../assets/centrul_elena_doamna.jpg";
import DgaspcDjv from "../../assets/DGASPC _djv.png";
import TeatrulFocsani from "../../assets/teatru_focsani.png";
import RadioRomaniaIasi from "../../assets/radio_romania_iasi.png";
import AtlasTv from "../../assets/atlas_tv.png";
import MonitorulDeVrancea from "../../assets/monitorul_de_vrancea.png";
import JurnalulDeVrancea from "../../assets/jdv.png";
import ZiarulDeVrancea from "../../assets/zdv.jpg";
import RadioDada from "../../assets/dada.png";


class Partners extends React.Component {
  render() {
    return [
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri</div>
        <div className="row d-flex align-items-center justify-content-around">
          <img className="col-md-3 col-sm-10 col-xs-3 partner-logo" src={PrimariaFocsani} />
          <img className="col-md-1 col-xs-3 partner-logo partner-logo-small" src={PrimariaOdobesti} />          
          <img className="col-md-3 col-sm-10 col-xs-6 partner-logo" src={PriamariaVidra} />
          <img className="col-md-1 partner-logo partner-logo-small" src={PrimariaDumbraveni} />
          <img className="col-md-3 col-sm-10 col-xs-6 partner-logo" src={PrimariaDumitresti} />
          <img className="col-md-1 partner-logo partner-logo-small" src={PrimariaAdjud} />
          <img className="col-md-3 col-sm-10 col-xs-6 partner-logo" src={PrimariaMarasesti} />
          <img className="col-md-1 partner-logo partner-logo-small" src={PrimariaPanciu} />
          <img className="col-md-2 partner-logo partner-logo-small" src={EmilBotaAdjud} />
          <img className="col-md-3 partner-logo partner-logo-small" src={UnireaFocsani} />
          <img className="col-md-2 partner-logo partner-logo-small" src={EremiaGrigorescuMarasesti} />
          <img className="col-md-2 partner-logo partner-logo-small" src={SimionMehedintiVidra} />
          <img className="col-md-2 partner-logo partner-logo-small" src={CentrulElenaDoamna} />
          <img className="col-md-3 partner-logo partner-logo-small" src={GrigoreGhebaDumitresti} />
          <img className="col-md-2 partner-logo partner-logo-small" src={AteneulPopularPastia} />
          <img className="col-md-2 partner-logo partner-logo-small" src={AnsamblulTaraVrancei} />
          <img className="col-md-2 partner-logo partner-logo-small" src={CasaCulturaOdobesti} />
          <img className="col-md-2 partner-logo partner-logo-small" src={CasaCulturaPanciu} />
          <img className="col-md-2 partner-logo partner-logo-small" src={LisPanciu} />
          <img className="col-md-3 partner-logo" src={DgaspcDjv} />
          <img className="col-md-3 partner-logo" src={TeatrulFocsani} />
        </div>
      </div>,
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri media</div>
        <div className="row d-flex align-items-center justify-content-around">
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={RadioRomaniaIasi} />
          <img className="col-md-1 col-sm-3 partner-logo partner-logo-small" src={RadioDada} />
          <img className="col-md-2 col-sm-2 partner-logo partner-logo-small" src={AtlasTv} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small" src={MonitorulDeVrancea} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small"  src={JurnalulDeVrancea} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small" src={ZiarulDeVrancea} />
        </div>
      </div>
    ]
  }
}

export default Partners;
