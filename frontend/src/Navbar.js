import React, { useState } from 'react';
import { useNavigation } from './navigation';
import Icon from './Icons';

function Navbar() {
  const { currentPage, navigateTo } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = 'primary-navigation';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academic', label: 'Academics' },
    { id: 'admission', label: 'Admissions' },
    { id: 'campus', label: 'Campus' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'halloffame', label: 'Hall of Fame' },
    { id: 'clubs', label: 'Clubs & Societies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId, event) => {
    navigateTo(pageId);
    setIsMobileMenuOpen(false);
    if (event && typeof event.currentTarget?.blur === 'function') {
      event.currentTarget.blur();
    }
  };

  return (
    <>
      {/* Top Announcement Bar - scrolls away naturally */}
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
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container navbar-container">
          <div className="navbar-inner">
            {/* Brand Logo & Name */}
            <button
              className="brand-container"
              onClick={(event) => handleNavClick('home', event)}
              aria-label="Go to Pioneers' Academy home page"
            >
              <img
                src="/college-logo.png"
                alt="Pioneers Higher Education Academy Logo"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/college-banner.png';
                  e.target.style.width = '60px';
                  e.target.style.height = '60px';
                  e.target.style.objectFit = 'cover';
                }}
              />
              <div className="brand-text">
                <span className="brand-title">PIONEERS' ACADEMY</span>
                <span className="brand-subtitle">HIGHER EDUCATION ACADEMY • WALING, SYANGJA</span>
                <span className="brand-motto">"We Receive to Give" • Estd. 2044 B.S.</span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <ul
              id={mobileMenuId}
              className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={(event) => handleNavClick(item.id, event)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={26} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;