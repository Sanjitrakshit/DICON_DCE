import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>DICON 2027</h3>
          <p>
            1<sup>st</sup> Dronacharya International Conference on Intelligent
            Computing &amp; Emerging Technologies
          </p>
          <p className="footer-meta">23 – 24 April, 2027 | Hybrid Mode</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/conference">About Conference</Link></li>
            <li><Link to="/tracks">Call for Papers</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Dronacharya College of Engineering</p>
          <p>Gurugram, Haryana, India</p>
          <a href="mailto:dicon.dce@gmail.com">dicon.dce@gmail.com</a>
          <div className="social-icons">
            <a href="https://www.whatsapp.com/channel/0029VaEURgL3rZZb7AlnWa3i" target="_blank" rel="noreferrer">
              <img src="/images/whatsapp.png" alt="WhatsApp" />
            </a>

            <a href="https://www.facebook.com/DronacharyaGurgaon" target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/dce_dronacharyacollege/" target="_blank" rel="noreferrer">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>

            <a href="https://www.youtube.com/@dronacharyacollegeofengine7116" target="_blank" rel="noreferrer">
              <img src="/images/youtube.png" alt="YouTube" />
            </a>

            <a href="https://www.linkedin.com/school/dronacharya-college-of-engineering/" target="_blank" rel="noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
      <div className="footer-center">
        <p className="footer-copyright">
          &copy; 2026–2027 DICON – International Conference. All Rights Reserved.
        </p>

        <div className="footer-credit">
          <p className="footer-credit-line">
            <span className="footer-credit-title">
              Website Development Team :
            </span>{' '}

            <span className="footer-developer-name">
              Ritika, Lehar, Sanjit
            </span>

            <span className="footer-credit-role">
              {' '}— B.Tech Students, DCE, Gurugram
            </span>

            {' ; '}

            <span className="footer-developer-name">
              Mr. Satender Pal
            </span>

            <span className="footer-credit-role">
              {' '}— System Administrator, DCE, Gurugram
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
