import React from 'react';
import './footer.css'; // Importa il file CSS per lo stile
import FacebookLogo from '../images/facebook.png';
import InstagramLogo from '../images/instagram.png';
import TrustPilot from '../images/trustpilot.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div>
            <br/>
            <br/>
            Trovaci anche su: <img src={FacebookLogo} alt="" width="30" height="30" className="facebook-logo" />
          </div>
          <br/>
          <div>
            Trovaci anche su: <img src={InstagramLogo} alt="" width="30" height="30" className="instagram-logo" />
          </div>
          <br/>
          <div>
            Trovaci anche su: <img src={TrustPilot} alt="" width="50" height="30" />
          </div>
        </div>
        <div className="footer-column">
            <br/>
            <br/>
          <div>Area legale</div>
          <br/>
          <div>Privacy Policy</div>
          <br/>
          <div>Press</div>
        </div>
      </div>
      <div className="footer-center">
        <p>Elysium Ltd - All rights reserved - © Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;



