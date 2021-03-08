import React from 'react';
import LogoTrupa from "../../assets/logo_trupa.png";
import {ReactComponent as FacebookLogo} from  "../../assets/fb_icon.svg";
import {ReactComponent as InstagramLogo} from "../../assets/ig_icon.svg";
import {ReactComponent as YoutubeLogo} from "../../assets/yt_icon.svg";

class Team extends React.Component {
  render() {
    const url = "https://www.facebook.com/trupadeteatru.protha";
    return <div className="custom-section team-section">
        <div className="container d-flex align-content-center justify-content-center flex-wrap">
            <div className="organiser-text">Festival organizat de</div>
            <div className="row justify-content-center">
                <img className="col-lg-3 col-md-4 col-sm-6 col-6 trupa-logo" src={LogoTrupa} />
            </div>
            <div className="social-logos-container">
                <a href="https://www.facebook.com/trupadeteatru.protha" target="_blank" ><FacebookLogo className="social-logo" /></a>
                <a href="https://www.youtube.com/channel/UCr_GbCvgXSb9sH3gjv8qvJQ"><YoutubeLogo className="social-logo" /></a>
                <a href="https://www.instagram.com/trupa.protha/"><InstagramLogo className="social-logo" /></a>
            </div>
        </div>
    </div>
  }
}

export default Team;
