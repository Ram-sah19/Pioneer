import React from 'react';
import { useNavigation } from './navigation';
import Icon from './Icons';

function Footer() {
  const { navigateTo, openApplyModal } = useNavigation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src="/college-logo.png"
                alt="Pioneers Crest"
                style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#fff', padding: '2px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/college-banner.png';
                }}
              />
              <div>
                <h3 className="footer-brand-title" style={{ margin: 0 }}>PIONEERS' ACADEMY</h3>
                <span style={{ fontSize: '0.78rem', color: '#f59e0b', fontWeight: 600 }}>
                  HIGHER EDUCATION ACADEMY
                </span>
              </div>
            </div>
            <p className="footer-desc">
              Established in 2044 B.S. (1987 A.D.), Pioneers' Higher Education Academy has been the cornerstone of educational transformation in Waling, Syangja, offering quality secondary, +2, CTEVT technical diplomas, and higher education.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#93c5fd', marginBottom: '15px' }}>
              "Pioneers are not born, they are made." • Motto: We Receive to Give
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.facebook.com/pioneersacademywaling"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#1877f2',
                  color: '#ffffff',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 600
                }}
              >
                <Icon name="facebook" size={16} /> Official Facebook (11K+)
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateTo('home')}>Home</button></li>
              <li><button onClick={() => navigateTo('about')}>About Academy</button></li>
              <li><button onClick={() => navigateTo('academic')}>Academic Programs</button></li>
              <li><button onClick={() => navigateTo('admission')}>Admission Guidelines</button></li>
              <li><button onClick={() => navigateTo('campus')}>Campus Life</button></li>
              <li><button onClick={() => navigateTo('facilities')}>Facilities & Labs</button></li>
              <li><button onClick={() => navigateTo('halloffame')}>Hall of Fame</button></li>
              <li><button onClick={() => navigateTo('clubs')}>Clubs & Societies</button></li>
              <li><button onClick={() => navigateTo('contact')}>Contact Desk</button></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="footer-col-title">Academic Streams</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateTo('academic')}>+2 Science (NEB)</button></li>
              <li><button onClick={() => navigateTo('academic')}>+2 Management (NEB)</button></li>
              <li><button onClick={() => navigateTo('academic')}>+2 Humanities & Law</button></li>
              <li><button onClick={() => navigateTo('academic')}>CTEVT General Medicine (HA)</button></li>
              <li><button onClick={() => navigateTo('academic')}>CTEVT Civil Engineering</button></li>
              <li><button onClick={() => navigateTo('academic')}>CTEVT Pre-Diploma Programs</button></li>
              <li><button onClick={() => navigateTo('academic')}>Bachelor of Business Studies (BBS - TU)</button></li>
              <li><button onClick={() => navigateTo('academic')}>Secondary School (Grade 1-10)</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="footer-col-title">Contact & Helpdesk</h4>
            <div className="footer-contact-item">
              <Icon name="mapPin" size={18} color="#38bdf8" />
              <span>Waling Municipality - 1, Syangja District, Gandaki Province, Nepal</span>
            </div>
            <div className="footer-contact-item">
              <Icon name="phone" size={18} color="#38bdf8" />
              <span>+977-63-440220 / +977-9856031370</span>
            </div>
            <div className="footer-contact-item">
              <Icon name="mail" size={18} color="#38bdf8" />
              <span>info@pioneersacademy.edu.np</span>
            </div>
            <div className="footer-contact-item">
              <Icon name="clock" size={18} color="#38bdf8" />
              <span>Sun – Fri: 6:00 AM – 5:00 PM (Admin)</span>
            </div>
            <button
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '10px', padding: '9px 14px' }}
              onClick={openApplyModal}
            >
              <Icon name="fileText" size={16} /> Online Admission Form
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Pioneers' Higher Education Academy, Waling, Syangja. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px', color: '#94a3b8' }}>
            <span>Affiliated to NEB & CTEVT</span>
            <span>•</span>
            <span>Campus Unit affiliated to TU</span>
            <span>•</span>
            <span>Estd. 2044 B.S.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;