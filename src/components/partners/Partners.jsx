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
import SimionMehedintiVidra from "../../assets/simion_mehedinti_vidra.png";
import GrigoreGhebaDumitresti from "../../assets/grigore_gheba_dumitresti.png";
import LisPanciu from "../../assets/lis.jpg";
import AnsamblulTaraVrancei from "../../assets/ansamblul_tara_vrancei.png";
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
import DuiliuZamfirescuOdobesti from "../../assets/duiliu_zamfirescu_odobesti.jpg";
import ScoalaGimnazialaPufesti from "../../assets/scoala_gimnaziala_pufesti.png";
import Vrancea24 from "../../assets/vrancea_24.jpg";
import ValidSoftware from "../../assets/valid_software.jpg";
import CinciFocsani from "../../assets/5focsani.jpg";
import VranceaTravel from "../../assets/vrancea_travel.jpg";
import ColegiulValeriuDCotea from "../../assets/colegiul_tehnic_valeriu_d_cotea.gif";
import UNATC from "../../assets/LogoUNATC.png";
import CasaDeCulturaOdobesti from "../../assets/LogoCasaDeCulturaOdobesti.png";
import ColegiulUnirea from "../../assets/LogoColegiulUnirea.jpg";
import LiceulTatarescu from "../../assets/LogoLicTatarescu.jpg";
import ColegiulBotta from "../../assets/LogoColegiulBotta.png";
import ScolaGimnazialaSoveja from "../../assets/LogoScoalaGimnazialaSoveja.jpg";
import LicTehnPanciu from "../../assets/LogoLicTehnPanciu.png";
import RadRomActualitati from "../../assets/RadioRomaniaActualiati.png"
import Liternet from "../../assets/Liternet.png";
import OmniVision from "../../assets/OmniVision.png";
import ULBS from "../../assets/logo_ulbs.png"
import AgerPress from "../../assets/logo_agerpress.png"
import Smark from "../../assets/logo_smark.png"
import Iqads from "../../assets/logo_iqads.png"

class Partners extends React.Component {
  render() {
    return [
      <div className="container partners custom-section">
        <div className="responsive-title">
          Partener principal
        </div>
        <div className="row justify-content-center">
          {/*
          <img className="col-md-5 col-sm-12 clickable-logo" src={UaTgMures} onClick={() => window.open("https://www.uat.ro/", "_blank")} />
          */}
          {/*<img className="col-md-5 col-sm-12 clickable-logo" style={{ marginBottom: -70, width: 2163 , maxWidth:'90%', height: 'auto',  }} 
                  src={UNATC} onClick={() => window.open("https://unatc.ro/devunatc/", "_blank")} />
          */}
          <img className="col-md-5 col-sm-12 clickable-logo" style={{ marginBottom: -10, marginTop:15, width: 2163 , maxWidth:'50%', height: 'auto',  }} 
                  src={ULBS} onClick={() => window.open("https://www.ulbsibiu.ro/ro/", "_blank")} />
                  
        </div>

      </div>,
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri</div>
        <div className="row d-flex align-items-center justify-content-around">
        <img className="col-md-3 partner-logo clickable-logo" src={DgaspcDjv} onClick={() => window.open("https://asistentasocialavn.ro/", "_blank")}/>
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={CasaCulturaPanciu} onClick={() => window.open("https://www.facebook.com/casadecultura.mihaieminescu.panciu", "_blank")}/>
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={CentrulElenaDoamna} onClick={() => window.open("https://cseielenadoamna.ro/", "_blank")}/>
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={LisPanciu} onClick={() => window.open("https://www.facebook.com/lispanciu", "_blank")} /> 
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={DuiliuZamfirescuOdobesti} onClick={() => window.open("http://www.ltdzodobesti.ro/", "_blank")}/>
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={SimionMehedintiVidra} onClick={() => window.open("https://liceul-vidra.ro/", "_blank")}/>
          <img className="col-md-4 partner-logo clickable-logo" src={ScoalaGimnazialaPufesti} onClick={() => window.open("https://scoalapufesti.ro/", "_blank")}/> 
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={CasaDeCulturaOdobesti} onClick={() => window.open("https://www.facebook.com/CasadeCulturaOdobestiVN/", "_blank")} />
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={ColegiulBotta} onClick={() => window.open("http://www.colegiulemilbotta.ro/", "_blank")} />
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={ScolaGimnazialaSoveja} onClick={() => window.open("https://www.facebook.com/scoalasoveja/", "_blank")}/>
          <img className="col-md-2 partner-logo partner-logo-small clickable-logo" src={EremiaGrigorescuMarasesti} onClick={() => window.open("https://www.liceulmarasesti.ro/", "_blank")}/>

        </div>
      </div>,
      <div className="container partners custom-section">
        <div className="responsive-title">Parteneri media</div>
        <div className="row d-flex align-items-center justify-content-around">
          <img className="col-md-2 col-sm-2 partner-logo partner-logo-small clickable-logo" src={AgerPress} onClick={() => window.open("https://www.agerpres.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-2 partner-logo partner-logo-small clickable-logo" src={Tvr} onClick={() => window.open("http://iasi.tvr.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-2 partner-logo partner-logo-small clickable-logo" src={RadRomActualitati} onClick={() => window.open("https://www.romania-actualitati.ro/", "_blank")} /> 
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={RadioRomaniaIasi} onClick={() => window.open("http://www.radioiasi.ro/", "_blank")}/>
          <img className="col-md-1 col-sm-3 partner-logo partner-logo-small clickable-logo" src={RadioDada} onClick={() => window.open("https://www.radiodada.ro/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={ZiarulDeVrancea} onClick={() => window.open("https://www.ziaruldevrancea.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small clickable-logo" src={JurnalulDeVrancea} onClick={() => window.open("https://www.jurnaldevrancea.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={Vrancea24} onClick={() => window.open("https://www.vrancea24.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small clickable-logo" src={MonitorulDeVrancea} onClick={() => window.open("https://www.monitoruldevrancea.ro/", "_blank")}/>        
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={ActualitateaVranceana} onClick={() => window.open("https://www.actualitateavranceana.ro/", "_blank")} />
          <img className="col-md-2 col-sm-4 partner-logo partner-logo-small clickable-logo" src={VranceaTravel} onClick={() => window.open("https://www.vranceatravel.ro/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={CinciFocsani} onClick={() => window.open("https://5focsani.ro/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={ValidSoftware} onClick={() => window.open("https://validsoftware.ro/", "_blank")}/>
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={Liternet} onClick={() => window.open("https://www.liternet.ro/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={OmniVision} onClick={() => window.open("https://omnivision.ro/despre-noi/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={Smark} onClick={() => window.open("https://www.smark.ro/", "_blank")} />
          <img className="col-md-2 col-sm-3 partner-logo partner-logo-small clickable-logo" src={Iqads} onClick={() => window.open("https://www.iqads.ro/", "_blank")} />

          
          {/*<img className="col-md-2 col-sm-2 partner-logo partner-logo-small" src={AtlasTv} />
          <img className="col-md-3 col-sm-1 partner-logo partner-logo-small" src={ColegiulValeriuDCotea} />
          */}
        </div>
      </div>
    ]
  }
}

export default Partners;
