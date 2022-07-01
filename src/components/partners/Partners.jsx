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
import Tvr from "../../assets/tvr_logo.jpg";
import UaTgMures from "../../assets/ua_tg_mures.png";
import ActualitateaVranceana from "../../assets/actualitatea_vranceana.jpg";
import CentrulCulturalSoveja from "../../assets/centrul_cultural_soveja.jpg";
import DuiliuZamfirescuOdobesti from "../../assets/duiliu_zamfirescu_odobesti.jpg";
import ScoalaGimnazialaPufesti from "../../assets/scoala_gimnaziala_pufesti.png";
import Vrancea24 from "../../assets/vrancea_24.jpg";
import ValidSoftware from "../../assets/valid_software.jpg";
import CinciFocsani from "../../assets/5focsani.jpg";
import VranceaTravel from "../../assets/vrancea_travel.jpg"
import ColegiulValeriuDCotea from "../../assets/colegiul_tehnic_valeriu_d_cotea.gif"

class Partners extends React.Component {
  render() {
    return [
      <div className="container partners custom-section">
        <div className="responsive-title">
          Partener principal
        </div>
        <div className="row justify-content-center">
          <img className="col-md-5 col-sm-12 clickable-logo" src={UaTgMures} onClick={() => window.open("https://www.uat.ro/", "_blank")} />
        </div>

      </div>,
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri</div>
        <div className="row d-flex align-items-center justify-content-around">
        <img className="col-md-2 partner-logo partner-logo-small" src={CentrulCulturalSoveja} />
          <img className="col-md-2 partner-logo partner-logo-small" src={AteneulPopularPastia} />
          <div className="responsive-partner">Ansamblul folcloric "Tara Vrancei"</div>
          <img className="col-md-2 partner-logo partner-logo-small" src={CasaCulturaPanciu} />
          <img className="col-md-2 partner-logo partner-logo-small" src={CentrulElenaDoamna} />
          <img className="col-md-3 partner-logo" src={DgaspcDjv} />
          <img className="col-md-2 partner-logo partner-logo-small" src={LisPanciu} /> 
          <img className="col-md-2 partner-logo partner-logo-small" src={DuiliuZamfirescuOdobesti} />
          <img className="col-md-2 partner-logo partner-logo-small" src={SimionMehedintiVidra} />
          <img className="col-md-4 partner-logo" src={ScoalaGimnazialaPufesti} />

        </div>
      </div>,
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri media</div>
        <div className="row d-flex align-items-center justify-content-around">
          <img className="col-md-2 partner-logo-small" src={Tvr} /> 
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small" src={MonitorulDeVrancea} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small" src={ZiarulDeVrancea} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={RadioRomaniaIasi} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={Vrancea24} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small"  src={JurnalulDeVrancea} />
          <img className="col-md-1 col-sm-3 partner-logo partner-logo-small" src={RadioDada} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={ValidSoftware} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small" src={ActualitateaVranceana} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={CinciFocsani} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small" src={VranceaTravel} />
          <img className="col-md-2 col-sm-2 partner-logo partner-logo-small" src={AtlasTv} />
          <img className="col-md-3 col-sm-1 partner-logo partner-logo-small" src={ColegiulValeriuDCotea} />

        </div>
      </div>
    ]
  }
}

export default Partners;
