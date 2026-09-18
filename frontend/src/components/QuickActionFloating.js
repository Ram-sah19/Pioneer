import React, { useState, useEffect } from 'react';
import { useNavigation } from '../navigation';
import Icon from '../Icons';

export const QuickActionFloating = () => {
  const { openApplyModal, navigateTo } = useNavigation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
        zIndex: 999
      }}
    >
      {/* Floating Apply Now Button with Live Pulsing Dot */}
      <button
        onClick={openApplyModal}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--secondary-crimson)',
          color: '#ffffff',
          padding: '10px 18px',
          borderRadius: 'var(--radius-full)',
          fontWeight: 700,
          fontSize: '0.9rem',
          boxShadow: '0 8px 24px rgba(211, 47, 47, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 0 8px #ffffff'
          }}
        />
        <Icon name="graduationCap" size={16} /> Quick Apply (2083/84)
      </button>

      {/* Floating Contact button */}
      <button
        onClick={() => navigateTo('contact')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--primary)',
          color: '#ffffff',
          padding: '8px 14px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.82rem',
          fontWeight: 600,
          boxShadow: '0 4px 14px rgba(15, 43, 92, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer'
        }}
      >
        <Icon name="phone" size={14} /> Help Desk
      </button>

      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#ffffff',
            color: 'var(--primary)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default QuickActionFloating;
