import React from 'react';
import { useNavigation } from '../navigation';
import Icon from '../Icons';

export const NoticeModal = () => {
  const { selectedNotice, closeNoticeModal } = useNavigation();

  if (!selectedNotice) return null;

  return (
    <div className="modal-overlay" onClick={closeNoticeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#fef2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b91c1c'
              }}
            >
              <Icon name="fileText" size={22} />
            </div>
            <div>
              <span className="badge badge-red" style={{ marginBottom: '4px' }}>
                {selectedNotice.category || 'Official Notice'}
              </span>
              <h3 className="modal-title" style={{ fontSize: '1.15rem' }}>
                {selectedNotice.title}
              </h3>
            </div>
          </div>
          <button
            onClick={closeNoticeModal}
            style={{ color: 'var(--muted)', padding: '4px', borderRadius: '4px' }}
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        <div className="modal-body">
          <div
            style={{
              display: 'flex',
              gap: '18px',
              paddingBottom: '14px',
              marginBottom: '16px',
              borderBottom: '1px solid var(--border)',
              fontSize: '0.85rem',
              color: 'var(--muted)'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Icon name="calendar" size={15} /> Date: {selectedNotice.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Icon name="building" size={15} /> Issued by: {selectedNotice.dept || 'Administration Office'}
            </span>
          </div>

          <div style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '25px' }}>
            <p style={{ marginBottom: '14px' }}>
              {selectedNotice.description || selectedNotice.fullContent || selectedNotice.summary}
            </p>
            {selectedNotice.bullets && (
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                {selectedNotice.bullets.map((b, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
              For further inquiries, students and guardians are requested to contact the front desk at <strong>+977-63-440220</strong> or email <strong>info@pioneersacademy.edu.np</strong>.
            </p>
          </div>

          <div
            style={{
              background: 'var(--light-bg)',
              padding: '16px',
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--slate)' }}>
              <Icon name="fileText" size={18} color="var(--primary-accent)" />
              <span>Official_Circular_{selectedNotice.id || '2083'}.pdf</span>
            </div>
            <button
              className="btn btn-outline-primary"
              style={{ padding: '6px 14px', fontSize: '0.84rem' }}
              onClick={() => alert(`Downloading official document for "${selectedNotice.title}"...`)}
            >
              <Icon name="download" size={15} /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
