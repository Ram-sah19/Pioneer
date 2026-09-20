import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Aboutpage() {
  const { navigateTo, openApplyModal } = useNavigation();

  const values = [
    {
      title: 'We Receive to Give',
      desc: 'Our guiding institutional motto. Education is not merely personal advancement; it is a sacred trust meant to uplift society, families, and nation.',
      icon: 'heart'
    },
    {
      title: 'Pioneers are Made',
      desc: 'We firmly believe that greatness is not innate. Through disciplined effort, dedicated faculty guidance, and moral grounding, any student can become a pioneer.',
      icon: 'sparkles'
    },
    {
      title: 'Practical Competence',
      desc: 'Bridging textbooks with practical labs, clinical hospital exposures for Health Assistants, IT programming, and business case studies.',
      icon: 'cpu'
    },
    {
      title: 'Inclusivity & Integrity',
      desc: 'Welcoming students from all socio-economic backgrounds across Syangja, Parbat, Palpa, and neighboring districts with generous merit and need scholarships.',
      icon: 'shieldCheck'
    }
  ];

  const milestones = [
    { year: '2044 B.S.', title: 'Founding of Pioneers Academy', desc: 'Established in Waling Municipality, Syangja, with a visionary mission to deliver modern English-medium and secondary schooling in the Gandaki hills.' },
    { year: '2058 B.S.', title: 'Launch of Higher Secondary (+2)', desc: 'Affiliated with the Higher Secondary Education Board (now NEB) to provide +2 Science and Management, saving students from migrating to distant cities.' },
    { year: '2067 B.S.', title: 'CTEVT Technical Wing Inception', desc: 'Accredited by CTEVT to offer PCL in General Medicine (Health Assistant) and technical diplomas, addressing rural healthcare and engineering needs.' },
    { year: '2075 B.S. - Present', title: 'Expansion into Pioneers Multiple Campus', desc: 'Initiation of Tribhuvan University affiliated Bachelor programs (BBS), high-tech science labs, and community health initiatives.' }
  ];

  const leaders = [
    {
      name: 'Principal / Campus Chief',
      role: 'Pioneers Higher Education Academy',
      message: 'At Pioneers, our mission has remained steadfast for over 38 years: to provide transformative education rooted in ethics, scientific curiosity, and social responsibility. We nurture not just scholars, but compassionate leaders.'
    },
    {
      name: 'Academic Director (+2 Wing)',
      role: 'Science & Management Faculty',
      message: 'Our pedagogical model combines conceptual clarity with competitive entrance coaching for medical, engineering, and banking careers. Our students routinely bring pride to Syangja with stellar board results.'
    },
    {
      name: 'CTEVT Health Program Coordinator',
      role: 'Department of General Medicine (HA)',
      message: 'Our Health Assistant program integrates rigorous classroom medicine with hands-on clinical rotations and community health posts, producing empathetic healthcare professionals who serve across Nepal.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>About Pioneers' Academy</h1>
          <p className="page-banner-subtitle">
            A 38-year legacy of academic distinction, ethical leadership, and community service in Waling, Syangja.
          </p>
        </div>
      </div>

      {/* Overview & History Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
            <div>
              <span className="section-tag">
                <Icon name="building" size={14} /> Our Heritage
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '18px' }}>
                Shaping Minds and Character in Waling Since 2044 B.S.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '16px' }}>
                <strong>Pioneers' Higher Education Academy</strong> (affiliated with <strong>NEB</strong>, <strong>CTEVT</strong>, and sister institution <strong>Pioneers Multiple Campus</strong> under <strong>Tribhuvan University</strong>) was established in 2044 B.S. (1987 A.D.) by visionary educators committed to bringing top-tier education to the hills of Syangja.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '16px' }}>
                Recognizing that local youth often had to leave their families to pursue higher secondary science, business, or paramedical diplomas in Pokhara or Kathmandu, Pioneers established an institution capable of rivaling metropolitan standards right here in Waling.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '25px' }}>
                Over the decades, more than 11,000 students have graduated from our portals. Today, our alumni serve with distinction as medical doctors, health assistants, engineers, chartered accountants, educators, civil servants, and social entrepreneurs across Nepal and internationally.
              </p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <button className="btn btn-primary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Enroll for 2083/84
                </button>
                <button className="btn btn-outline-primary" onClick={() => navigateTo('academic')}>
                  <Icon name="bookOpen" size={16} /> View Programs
                </button>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)'
                }}
              >
                <img
                  src="/campus-hero.jpg"
                  alt="Pioneers Higher Education Academy Assembly"
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/college-banner.webp';
                  }}
                />
                <div style={{ padding: '20px', background: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ color: 'var(--primary)', margin: 0 }}>Pioneers' Higher Education Academy</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', margin: 0 }}>Waling Municipality, Syangja, Nepal</p>
                    </div>
                    <span className="badge badge-red">Estd. 2044 B.S.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto & Core Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="heart" size={14} /> Guiding Philosophy
            </span>
            <h2 className="section-title">Our Motto & Core Values</h2>
            <p className="section-subtitle">
              Every lesson, assembly, laboratory exercise, and community project at Pioneers is driven by our foundational beliefs.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <div className="card-icon-box">
                    <Icon name={v.icon} size={24} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.18rem' }}>{v.title}</h3>
                  <p className="card-text" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="calendar" size={14} /> Four Decades of Growth
            </span>
            <h2 className="section-title">Historical Journey</h2>
            <p className="section-subtitle">
              Milestones that defined Pioneers' emergence as the premier academic center of Syangja.
            </p>
          </div>

          <div className="grid-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  borderTop: '4px solid var(--secondary-crimson)',
                  padding: '24px'
                }}
              >
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--primary-accent)',
                    marginBottom: '8px',
                    display: 'block'
                  }}
                >
                  {m.year}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '8px' }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="users" size={14} /> Institutional Governance
            </span>
            <h2 className="section-title">Messages from Leadership</h2>
            <p className="section-subtitle">
              Guided by experienced educational leaders, academicians, and healthcare practitioners.
            </p>
          </div>

          <div className="grid-3">
            {leaders.map((lead, idx) => (
              <div key={idx} className="card">
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--primary-light)',
                        color: 'var(--primary-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon name="users" size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--primary)', margin: 0 }}>{lead.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>{lead.role}</p>
                    </div>
                  </div>
                  <p className="card-text" style={{ fontStyle: 'italic', fontSize: '0.92rem' }}>
                    "{lead.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Accreditations Banner */}
      <section className="section" style={{ background: 'var(--primary-dark)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', color: '#ffffff' }}>
            Accreditations & Government Affiliations
          </h3>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto 30px', fontSize: '0.95rem' }}>
            All programs at Pioneers' Higher Education Academy are fully accredited and recognized by the Ministry of Education, Science and Technology, Government of Nepal.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 28px', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#38bdf8' }}>NEB</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>National Examination Board (+2)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 28px', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fca5a5' }}>CTEVT</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Technical & Paramedical Diplomas</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 28px', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fde68a' }}>TU</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Tribhuvan University (BBS Campus)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 28px', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#86efac' }}>MoEST</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Govt. of Nepal Ministry of Education</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutpage;