import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close dropdowns/menu when clicking outside or pressing Escape
  const navRef = useRef(null);
  useEffect(() => {
    function handleDocumentClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const isActive = (href) => {
    const path = location.pathname === '/' ? '' : location.pathname;
    if (path === '' && href === '') return true;
    return path === `/${href}` || path === href;
  };

  return (
    <div className="header-sticky">
      <header className="site-header">
        <div className="header-container">
          <div className="header-logo left-logo">
            <img
              src="/images/dce-logo2.png"
              alt="Dronacharya College of Engineering Logo"
            />
            <div className="Year"><img src="/images/Year-of-Excellnece-DCE.jpg" alt="Year of Excellnence" /></div>
          </div>

          <div className="header-center">
            <div className="header-subtitle">
              1<sup>st</sup> Dronacharya International Conference on Intelligent
              Computing & Emerging Technologies
            </div>

            <div className="header-title">DICON 2027</div>

            <div className="header-record">IEEE conference record number #73090</div>



            <div className="header-date">23 - 24 April, 2027 | Hybrid Mode</div>
          </div>

          <div className="header-logo right-logo">
            <img src="/images/dicon2027.png" alt="DICON 2027 Logo" />
            <div className="header-logo lego">
              <img src="/images/ieee.png" alt="IEEE_logo" />
              <img src="/images/ieee-D.png" alt="IEEE_DELHI" />
            </div>
          </div>
        </div>
      </header>

      <nav className="top-nav" ref={navRef}>
        {/* HAMBURGER (mobile only) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('') ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/institute" className={isActive('institute') ? 'active' : ''} onClick={handleLinkClick}>About Institute</Link></li>
          <li><Link to="/conference" className={isActive('conference') ? 'active' : ''} onClick={handleLinkClick}>About Conference</Link></li>

          <li className={`nav-item has-dropdown ${openDropdown === 'workshop' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-btn"
              aria-expanded={openDropdown === 'workshop'}
              onClick={() => handleDropdownToggle('workshop')}
            >
              About Workshop<span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/workshop" className={isActive('workshop') ? 'active' : ''} onClick={handleLinkClick}>Code to Insight: Practical ML for Real-World Applications</Link></li>
              <li><Link to="/workshop2" className={isActive('advisory') ? 'active' : ''} onClick={handleLinkClick}>Data Analytics, AI & Model-Based Design with MATLAB</Link></li>
              <li><Link to="/workshop3" className={isActive('oversight') ? 'active' : ''} onClick={handleLinkClick}>Applied Cybersecurity Techniques: A Practical Intensive</Link></li>
              <li><Link to="/workshop3" className={isActive('oversight') ? 'active' : ''} onClick={handleLinkClick}>FutureTech Workshop: Drones, Robotics & Embedded Intelligence </Link></li>


            </ul>
          </li>
          <li><Link to="/tracks" className={isActive('tracks') ? 'active' : ''} onClick={handleLinkClick}>Call for Papers</Link></li>

          <li className={`nav-item has-dropdown ${openDropdown === 'committee' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-btn"
              aria-expanded={openDropdown === 'committee'}
              onClick={() => handleDropdownToggle('committee')}
            >
              Conference Committee <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/committee" className={isActive('committee') ? 'active' : ''} onClick={handleLinkClick}>Organising Committee</Link></li>
              <li><Link to="/advisory" className={isActive('advisory') ? 'active' : ''} onClick={handleLinkClick}>Advisory Committee</Link></li>
              <li><Link to="/oversight" className={isActive('oversight') ? 'active' : ''} onClick={handleLinkClick}>Section Oversight Committee</Link></li>

            </ul>
          </li>

          <li className={`nav-item has-dropdown ${openDropdown === 'speakers' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-btn"
              aria-expanded={openDropdown === 'speakers'}
              onClick={() => handleDropdownToggle('speakers')}
            >
              Speakers <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/plenary" className={isActive('plenary') ? 'active' : ''} onClick={handleLinkClick}>Plenary Speakers</Link></li>
              <li><Link to="/keynote" className={isActive('keynote') ? 'active' : ''} onClick={handleLinkClick}>Keynote Speakers</Link></li>
            </ul>
          </li>
          <li><Link to="/registration" className={`nav-cta ${isActive('registration') ? 'active' : ''}`} onClick={handleLinkClick}>Registration</Link></li>
          <li className={`nav-item has-dropdown ${openDropdown === 'authors' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-btn"
              aria-expanded={openDropdown === 'authors'}
              onClick={() => handleDropdownToggle('authors')}
            >
              Authors <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/author-submission" className={isActive('author-submission') ? 'active' : ''} onClick={handleLinkClick}>Author Submission</Link></li>
              <li><Link to="/camera-submission" className={isActive('camera-submission') ? 'active' : ''} onClick={handleLinkClick}>Camera Submission</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className={isActive('contact') ? 'active' : ''} onClick={handleLinkClick}>Contact Us</Link></li>
          <li><Link to="/plagiarism" className={isActive('plagiarism') ? 'active' : ''} onClick={handleLinkClick}>Plagiarism Policy</Link></li>
        </ul>
      </nav>

      {location.pathname === '/' && (
        <div className="accreditation">
          <div className="item">
            <img src="/images/AICTE.jpg" alt="AICTE" />
          </div>
          <div className="item">
            <img src="/images/gurugram-university.jpg" alt="Gurugram University" />
          </div>

          <div className="item">
            <img src="/images/IIC.jpg" alt="IIC" />
          </div>
          <div className="item">
            <img src="/images/Naac.jpg" alt="NAAC" />
          </div>
          <div className="item">
            <img src="/images/NBA.jpg" alt="NBA" />
          </div>
          <div className="item">
            <img src="/images/Year-of-Excellnece-DCE.jpg" alt="Year of Excellence DCE" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
