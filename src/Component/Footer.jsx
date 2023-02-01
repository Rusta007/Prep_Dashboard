import React from "react";
// import './All2.css'
import "../Style/PrepFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#D9F5F9" }}>
      <div className="footer">
        <div className="f one">
          <li>
            <h3>Follow Us</h3>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="darkblue" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faInstagram} size="2x" color="darkred" />
            &nbsp;&nbsp;
          </li>
          <br />
          <li>Contact Us</li>
          <br />
          <li> +91-125498722</li>
          <li>-support@PrepBytes.com</li>
        </div>
        <br />
        <div className="f two">
          <li>
            <h2>QUICK LINKS</h2>
          </li>
          <li>interview Notes</li>
          <li>Mock Tests</li>
          <li>Placement Program</li>
          <li>Coding Test</li>
          <li>About Us</li>
          <li></li>
          <li>Blog</li>
        </div>
      </div>
      <hr />
      <div className="last">
        <span>Copyright@2022</span>
        <span>
          Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Refund Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms of Use
        </span>
      </div>
    </div>
  );
};

export default Footer;
