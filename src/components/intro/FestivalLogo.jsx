import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import {ReactComponent as Logo} from '../../assets/festival-logo.svg';
import {ReactComponent as MobileLogo} from "../../assets/festival-logo-mobile.svg";
import {Bounce} from "gsap";

const FestivalLogo = props => {
    useEffect(() => {
        gsap.set("#logo-watch", {scale: 1});
        const animation = gsap.timeline({paused: true, repeat: -1, repeatDelay: 3})
            .to("#logo-watch", .5, { transformOrigin: "center center",
                ease: Bounce.easeOut, rotation: 10, scale: 1.1})
            .to("#logo-watch", .5, { transformOrigin: "center center",
                ease: Bounce.easeInOut, rotation: -5, scale: 1})
            .to("#logo-watch", .2, { transformOrigin: "center center", rotation: 0, scale: 1})
        setTimeout(() => animation.restart(), 3000);
    });

    return [
        <MobileLogo className="festival-logo mobile" />,
        <Logo className="festival-logo desktop" />
    ]
}

export default FestivalLogo;