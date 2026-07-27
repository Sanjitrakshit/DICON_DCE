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
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DICON 2027. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
