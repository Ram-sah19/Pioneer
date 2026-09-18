import React, { useState } from 'react';
import { useNavigation } from './navigation';
import Icon from './Icons';

function Navbar() {
  const { currentPage, navigateTo, openApplyModal } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academic', label: 'Academics' },
    { id: 'admission', label: 'Admissions' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'halloffame', label: 'Hall of Fame' },
    { id: 'newsevent', label: 'News & Events' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <Icon name="phone" size={14} color="#38bdf8" />
                <a href="tel:+97763440220">+977-63-440220</a> / <a href="tel:+9779856031370">9856031370</a>
              </span>
              <span className="top-bar-item">
                <Icon name="mail" size={14} color="#38bdf8" />
                <a href="mailto:info@pioneersacademy.edu.np">info@pioneersacademy.edu.np</a>
              </span>
              <span className="top-bar-item">
                <Icon name="mapPin" size={14} color="#38bdf8" />
                <span>Waling-1, Syangja, Nepal</span>
              </span>
            </div>

            <div className="top-bar-right">
              <span className="top-pill">Admissions Open 2083/84</span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Affiliated with <strong>NEB</strong> | <strong>CTEVT</strong> | <strong>TU</strong>
              </span>
              <a
                href="https://www.facebook.com/pioneersacademywaling"
                target="_blank"
                rel="noreferrer"
                className="top-bar-item"
                title="Follow us on Facebook (11K+ Community)"
                style={{ color: '#38bdf8' }}
              >
                <Icon name="facebook" size={15} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo & Name */}
            <div className="brand-container" onClick={() => handleNavClick('home')}>
              <img
                src="/college-logo.png"
                alt="Pioneers Higher Education Academy Logo"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/college-banner.png';
                }}
              />
              <div className="brand-text">
                <span className="brand-title">PIONEERS' ACADEMY</span>
                <span className="brand-subtitle">HIGHER EDUCATION ACADEMY • WALING, SYANGJA</span>
                <span className="brand-motto">"We Receive to Give" • Estd. 2044 B.S.</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li style={{ marginLeft: '10px' }}>
                <button
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.86rem' }}
                  onClick={() => {
                    openApplyModal();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Icon name="graduationCap" size={15} /> Apply Now
                </button>
              </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={26} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;