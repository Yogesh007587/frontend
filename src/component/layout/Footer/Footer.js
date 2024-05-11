import React from 'react';
import playstore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playstore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>ProCart</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2024 &copy; TeamInSurGenT</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                {/* <div className="wrapper">
                    <a href="http://instagram.com" className="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                </div> */}
                <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" className="Instagram"/></a>
                <a href="http://youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" className="Youtube"/></a>
                <a href="http://instagram.com"><FontAwesomeIcon icon={faFacebook} size="2x" className="Facebook"/></a>
                <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" className="Twitter"/></a>

            </div>
        </footer>
    )
}

export default Footer
