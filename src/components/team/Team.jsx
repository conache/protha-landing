import React from 'react';
import LogoFestival from "../../assets/bottom-logo.png";
import {ReactComponent as FacebookLogo} from  "../../assets/fb_icon.svg";
import {ReactComponent as InstagramLogo} from "../../assets/ig_icon.svg";
import {ReactComponent as YoutubeLogo} from "../../assets/yt_icon.svg";

class Team extends React.Component {
  render() {
    return <div className="custom-section team-section">
        <div className="container d-flex align-content-center justify-content-center flex-wrap">
            <img className="col-lg-4 col-md-6 col-sm-8 col-8 festival-logo" src={LogoFestival} />
            <div className="social-logos-container">
                <a href="https://www.facebook.com/oradeteatru" target="_blank" ><FacebookLogo className="social-logo" /></a>
                <a href="https://www.youtube.com/channel/UCr_GbCvgXSb9sH3gjv8qvJQ"><YoutubeLogo className="social-logo" /></a>
                <a href="https://www.instagram.com/trupa.protha/"><InstagramLogo className="social-logo" /></a>
            </div>
        </div>
    </div>
  }
}

export default Team;