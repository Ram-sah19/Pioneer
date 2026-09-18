import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Ourpgm() {
  const { navigateTo, openApplyModal } = useNavigation();

  const programs = [
    {
      title: '+2 Science',
      board: 'NEB Affiliated',
      duration: '2 Years',
      icon: 'sparkles',
      badgeClass: 'badge-blue',
      desc: 'Rigorous preparatory program for careers in Medicine (MBBS), Engineering (IOE), IT, and Pure Sciences with modern Physics, Chemistry, Biology and Computer labs.',
      subjects: ['Physics', 'Chemistry', 'Biology / Mathematics', 'Computer Science']
    },
    {
      title: '+2 Management',
      board: 'NEB Affiliated',
      duration: '2 Years',
      icon: 'award',
      badgeClass: 'badge-amber',
      desc: 'Developing financial acumen, entrepreneurial vision, and business leadership with practical case studies, computer accounting, and industrial exposure.',
      subjects: ['Accountancy', 'Economics', 'Business Studies', 'Hotel Mgmt / Computer']
    },
    {
      title: 'General Medicine (HA)',
      board: 'CTEVT Affiliated',
      duration: '3 Years Diploma',
      icon: 'heart',
      badgeClass: 'badge-red',
      desc: 'Comprehensive paramedical training producing certified Health Assistants equipped with anatomy, clinical diagnostics, pathology, and hospital rotations.',
      subjects: ['Anatomy & Physiology', 'Clinical Medicine', 'Community Health', 'Pathology']
    },
    {
      title: 'Diploma in Civil Engineering',
      board: 'CTEVT Affiliated',
      duration: '3 Years Diploma',
      icon: 'building',
      badgeClass: 'badge-green',
      desc: 'Hands-on technical engineering curriculum focused on surveying, construction technology, structural drawing, and CAD applications for infrastructure development.',
      subjects: ['Surveying', 'Building Construction', 'AutoCAD', 'Structural Mechanics']
    },
    {
      title: 'Bachelor of Business Studies (BBS)',
      board: 'Tribhuvan University',
      duration: '4 Years Degree',
      icon: 'graduationCap',
      badgeClass: 'badge-blue',
      desc: 'Undergraduate collegiate program at Pioneers Multiple Campus preparing graduates for banking, corporate leadership, marketing, and civil services.',
      subjects: ['Financial Management', 'Marketing', 'Business Law', 'Strategic Management']
    },
    {
      title: 'Secondary School (Grade 1-10)',
      board: 'Government of Nepal / SEE',
      duration: 'Primary to Class 10',
      icon: 'bookOpen',
      badgeClass: 'badge-amber',
      desc: 'Holistic foundational education in English medium focusing on conceptual learning, STEAM activities, moral ethics, and outstanding SEE track records.',
      subjects: ['English Medium', 'Computer Literacy', 'Science & Math Focus', 'Extracurriculars']
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="bookOpen" size={14} /> Educational Pathways
          </span>
          <h2 className="section-title">Our Academic Programs</h2>
          <p className="section-subtitle">
            Pioneers' Higher Education Academy offers government-recognized programs under NEB, CTEVT, and Tribhuvan University, tailored to launch meaningful careers.
          </p>
        </div>

        <div className="grid-3">
          {programs.map((p, idx) => (
            <div key={idx} className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div className="card-icon-box">
                    <Icon name={p.icon} size={24} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className={`badge ${p.badgeClass}`}>{p.board}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{p.duration}</span>
                  </div>
                </div>

                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.desc}</p>

                <div style={{ marginBottom: '18px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>
                    Key Focus Areas:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.76rem',
                          background: 'var(--light-bg)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          border: '1px solid var(--border)',
                          color: 'var(--slate)'
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    className="btn btn-outline-primary"
                    style={{ padding: '6px 14px', fontSize: '0.84rem' }}
                    onClick={() => navigateTo('academic')}
                  >
                    Details & Syllabus
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.84rem' }}
                    onClick={openApplyModal}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn btn-primary" onClick={() => navigateTo('academic')}>
            <Icon name="compass" size={16} /> View Complete Curriculum & Eligibility
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ourpgm;