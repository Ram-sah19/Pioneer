import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Notice() {
  const { navigateTo, openNoticeModal, openApplyModal } = useNavigation();

  const recentNotices = [
    {
      id: 'N-2083-01',
      date: 'Bhadra 28, 2083',
      category: 'Admissions',
      title: 'Admissions Open for Grade XI (+2 Science & Management) and CTEVT HA',
      dept: 'Admissions Committee',
      summary: 'Applications are formally invited from SEE graduates for enrollment into Grade 11 Science & Management, and CTEVT 3-Year PCL in General Medicine (Health Assistant).',
      bullets: [
        'Merit-based scholarships available for GPA 3.6 and above.',
        'Entrance assessment and counseling sessions held daily at the main campus.',
        'Online application portal is now active.'
      ]
    },
    {
      id: 'N-2083-02',
      date: 'Bhadra 22, 2083',
      category: 'Academic Calendar',
      title: 'First Terminal Examination Routine Published for Class 11, 12 and BBS',
      dept: 'Examination Controller',
      summary: 'The routine for the upcoming First Terminal Examinations for academic session 2083 has been officially finalized and published on the notice board.',
      bullets: [
        'Examinations commence from Ashwin 10, 2083.',
        'Students must collect admit cards from the accounts section by Ashwin 5.',
        'Practical viva schedules will be announced by respective departments.'
      ]
    },
    {
      id: 'N-2083-03',
      date: 'Bhadra 15, 2083',
      category: 'Community Service',
      title: 'Free Community Health Screening & Blood Donation Camp by HA Students',
      dept: 'Youth Red Cross & Health Dept',
      summary: 'In collaboration with Red Cross Syangja and Waling Primary Health Center, CTEVT General Medicine students are hosting a free healthcare and diagnostic camp.',
      bullets: [
        'Free blood pressure, sugar screening, and general medical checkups.',
        'Venue: Pioneers Higher Education Academy Auditorium & Grounds.',
        'All community members and guardians are cordially welcome.'
      ]
    }
  ];

  return (
    <section className="section" style={{ paddingTop: '50px' }}>
      <div className="container">
        {/* Flash Announcement Ticker */}
        <div className="ticker-bar">
          <span className="ticker-label">Urgent Notice</span>
          <span className="ticker-text">
            Admissions Open for Grade 11 (+2 Science, Management) & CTEVT General Medicine (Health Assistant) for Academic Session 2083/84.
          </span>
          <button className="ticker-link" onClick={openApplyModal}>
            Apply Online &rarr;
          </button>
        </div>

        <div className="section-header">
          <span className="section-tag">
            <Icon name="fileText" size={14} /> Official Bulletins
          </span>
          <h2 className="section-title">Notice Board & Announcements</h2>
          <p className="section-subtitle">
            Stay informed with the latest updates on admissions, examination routines, academic calendars, and campus activities.
          </p>
        </div>

        <div className="grid-3">
          {recentNotices.map((n) => (
            <div
              key={n.id}
              className="card"
              style={{ cursor: 'pointer' }}
              onClick={() => openNoticeModal(n)}
            >
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-blue">{n.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Icon name="calendar" size={13} /> {n.date}
                  </span>
                </div>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>
                  {n.title}
                </h3>
                <p className="card-text" style={{ fontSize: '0.9rem' }}>
                  {n.summary}
                </p>
                <div className="card-footer">
                  <span style={{ fontSize: '0.82rem', color: 'var(--primary-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read Notice Details <Icon name="arrowRight" size={14} />
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>PDF Circular</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <button className="btn btn-outline-primary" onClick={() => navigateTo('newsevent')}>
            <Icon name="fileText" size={16} /> View All Notices & Events Archive
          </button>
        </div>
      </div>
    </section>
  );
}

export default Notice;