import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Hallpage() {
  const { navigateTo, openApplyModal } = useNavigation();
  const [filter, setFilter] = useState('all');
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const moments = [
    {
      id: 1,
      title: 'Annual Felicitation Ceremony',
      caption: 'District toppers honoured on stage by the chief guest and principal during the yearly awards function.',
      tag: 'Awards Function',
      image: '/campus-hero.jpg'
    },
    {
      id: 2,
      title: 'Board Topper Award Presentation',
      caption: 'NEB Class 12 Science and Management toppers receiving merit shields and scholarship certificates.',
      tag: 'Academic Merit',
      image: '/college-banner.png'
    },
    {
      id: 3,
      title: 'Inter-College Volleyball Trophy Lift',
      caption: 'The champions team lifting the running trophy after winning the Syangja District Cup.',
      tag: 'Sports Glory',
      image: '/campus-hero.jpg'
    },
    {
      id: 4,
      title: 'Alumni Homecoming Meet',
      caption: 'Doctors, engineers and public servants returning to campus to mentor current students.',
      tag: 'Alumni Network',
      image: '/college-banner.png'
    },
    {
      id: 5,
      title: 'CTEVT Graduation & Oath Taking',
      caption: 'General Medicine (Health Assistant) graduates taking their professional service oath.',
      tag: 'Graduation',
      image: '/campus-hero.jpg'
    },
    {
      id: 6,
      title: 'Science Exhibition Winners',
      caption: 'Student innovators recognised for winning the district-level science and robotics exhibition.',
      tag: 'Innovation',
      image: '/college-banner.png'
    }
  ];

  const honors = [
    {
      name: 'Aayush Adhikari',
      title: 'District Topper • +2 Science (NEB)',
      year: 'Batch 2081',
      category: 'plus2',
      badge: 'GPA 3.88',
      desc: 'Achieved the highest GPA in Syangja district in the National Examination Board (NEB) Class 12 Science examinations, securing full scholarship for engineering.',
      icon: 'award',
      image: '/campus-hero.jpg'
    },
    {
      name: 'Pratima Sharma',
      title: 'District Rank 1 • +2 Management (NEB)',
      year: 'Batch 2081',
      category: 'plus2',
      badge: 'GPA 3.82',
      desc: 'Ranked 1st among all management candidates in Syangja district with outstanding distinction in Principles of Accounting and Economics.',
      icon: 'award',
      image: '/college-banner.png'
    },
    {
      name: 'Pooja Karki',
      title: 'Merit Holder • CTEVT General Medicine (HA)',
      year: 'Batch 2080',
      category: 'ctevt',
      badge: '88.4% Distinction',
      desc: 'Passed the CTEVT final diploma board examination with top honours and cleared the Nepal Health Professional Council (NHPC) licensure on first attempt.',
      icon: 'heart',
      image: '/campus-hero.jpg'
    },
    {
      name: 'Dr. Bishal Aryal',
      title: 'Medical Officer • MBBS Graduate',
      year: 'Alumni Batch 2073',
      category: 'alumni',
      badge: 'CEE Medical Ranker',
      desc: 'Completed +2 Science at Pioneers Academy, cracked the common medical entrance examination, and currently serves as a physician at a leading regional teaching hospital.',
      icon: 'shieldCheck',
      image: '/college-banner.png'
    },
    {
      name: 'Er. Sandeep Gurung',
      title: 'Civil Engineer • Infrastructure Development',
      year: 'Alumni Batch 2074',
      category: 'alumni',
      badge: 'IOE Pulchowk Alum',
      desc: 'Pioneers science graduate who earned a Bachelor in Civil Engineering from Pulchowk Campus, IOE, now leading municipal road and bridge projects.',
      icon: 'building',
      image: '/campus-hero.jpg'
    },
    {
      name: 'Sunita Thapa',
      title: 'Senior Health Assistant • Rural Healthcare',
      year: 'Alumni Batch 2075',
      category: 'alumni',
      badge: 'Community Health Leader',
      desc: 'Graduated from our CTEVT General Medicine program and currently leads clinical operations at a primary health care center in Gandaki Province.',
      icon: 'heart',
      image: '/college-banner.png'
    },
    {
      name: 'Pioneers Senior Volleyball Team',
      title: 'Champions • Syangja Inter-College Cup',
      year: 'Session 2082',
      category: 'sports',
      badge: 'Gold Medalists',
      desc: 'Defeated top collegiate teams across Syangja and Palpa to lift the running trophy at the District Inter-School Volleyball Championship.',
      icon: 'award',
      image: '/campus-hero.jpg'
    },
    {
      name: 'Rohan Shrestha',
      title: 'Semi-Qualified Chartered Accountant (CA)',
      year: 'Alumni Batch 2076',
      category: 'alumni',
      badge: 'ICAN Ranker',
      desc: 'Credited the solid accounting and financial fundamentals learned at Pioneers Management faculty for his exceptional success in ICAN examinations.',
      icon: 'sparkles',
      image: '/college-banner.png'
    }
  ];

  const spotlight = [
    {
      id: 1,
      name: 'Aayush Adhikari',
      headline: 'District Topper • +2 Science (NEB)',
      grade: 'GPA 3.88',
      tag: 'NEB Board 2081',
      detail: 'Scored the highest GPA in Syangja district and earned a full scholarship for engineering.',
      image: '/campus-hero.jpg'
    },
    {
      id: 2,
      name: 'Pratima Sharma',
      headline: 'District Rank 1 • +2 Management (NEB)',
      grade: 'GPA 3.82',
      tag: 'NEB Board 2081',
      detail: 'Ranked 1st among all management candidates in the district with distinction in Accounting.',
      image: '/college-banner.png'
    },
    {
      id: 3,
      name: 'Pooja Karki',
      headline: 'Merit Holder • CTEVT General Medicine (HA)',
      grade: '88.4% Distinction',
      tag: 'CTEVT 2080',
      detail: 'Cleared the NHPC licensure examination on her first attempt with top honours.',
      image: '/campus-hero.jpg'
    },
    {
      id: 4,
      name: 'Dr. Bishal Aryal',
      headline: 'MBBS Graduate • CEE Medical Ranker',
      grade: 'CEE Qualifier',
      tag: 'Alumni 2073',
      detail: 'Cracked the national medical entrance and now serves as a physician at a teaching hospital.',
      image: '/college-banner.png'
    },
    {
      id: 5,
      name: 'Er. Sandeep Gurung',
      headline: 'Civil Engineer • IOE Pulchowk Alum',
      grade: 'IOE Ranker',
      tag: 'Alumni 2074',
      detail: 'Pioneers science graduate now leading municipal road and bridge infrastructure projects.',
      image: '/campus-hero.jpg'
    }
  ];

  const snapshot = [
    { num: '100%', label: 'NEB & CTEVT Board Pass' },
    { num: '50+', label: 'Medical & Engineering Entrance Qualifiers' },
    { num: '25+', label: 'District & Province Board Ranks' },
    { num: '11K+', label: 'Alumni Impacting Society Worldwide' }
  ];

  const [slide, setSlide] = useState(0);
  const gridRef = useRef(null);

  const goPrev = () => setSlide((s) => (s - 1 + spotlight.length) % spotlight.length);
  const goNext = () => setSlide((s) => (s + 1) % spotlight.length);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % spotlight.length), 5000);
    return () => clearInterval(timer);
  }, [spotlight.length]);

  const filteredHonors =
    filter === 'all'
      ? honors
      : honors.filter((h) => h.category === filter);

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Hall of Fame</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Hall of Fame & Achievements</h1>
          <p className="page-banner-subtitle">
            Celebrating the extraordinary academic accomplishments, medical entrance successes, and athletic triumphs of Pioneers' scholars.
          </p>
        </div>
      </div>

      {/* Achievers Spotlight Hero Carousel */}
      <section className="ach-hero-section">
        <div className="container">
          <div className="ach-hero">
            <div className="ach-hero-main">
              <img
                className="ach-hero-img"
                src={spotlight[slide].image}
                alt={spotlight[slide].name}
                onError={(e) => { e.target.onerror = null; e.target.src = '/college-banner.png'; }}
              />
              <div className="ach-hero-overlay">
                <span className="badge badge-amber">{spotlight[slide].tag}</span>
                <h2 className="ach-hero-name">{spotlight[slide].name}</h2>
                <div className="ach-hero-headline">{spotlight[slide].headline}</div>
                <p className="ach-hero-detail">{spotlight[slide].detail}</p>
                <div className="ach-hero-grade">{spotlight[slide].grade}</div>
              </div>

              <button className="ach-hero-arrow left" onClick={goPrev} aria-label="Previous achiever">
                <Icon name="chevronRight" size={26} />
              </button>
              <button className="ach-hero-arrow right" onClick={goNext} aria-label="Next achiever">
                <Icon name="chevronRight" size={26} />
              </button>

              <div className="ach-hero-dots">
                {spotlight.map((s, i) => (
                  <button
                    key={s.id}
                    className={`ach-hero-dot ${i === slide ? 'active' : ''}`}
                    onClick={() => setSlide(i)}
                    aria-label={`Show achiever ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="ach-hero-side">
              <div className="ach-hero-panel">
                <div className="ach-hero-panel-title">
                  <Icon name="award" size={16} /> Hall of Fame Snapshot
                </div>
                <div className="ach-hero-stats">
                  {snapshot.map((s, i) => (
                    <div key={i} className="ach-hero-stat">
                      <span className="ach-hero-stat-num">{s.num}</span>
                      <span className="ach-hero-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="btn btn-secondary ach-hero-more"
                onClick={() => gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <Icon name="award" size={16} /> View All Honorees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section" ref={gridRef} style={{ scrollMarginTop: '90px' }}>
        <div className="container">
          <div className="tabs-container">
            <button
              className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Honorees ({honors.length})
            </button>
            <button
              className={`tab-btn ${filter === 'plus2' ? 'active' : ''}`}
              onClick={() => setFilter('plus2')}
            >
              NEB Board Toppers
            </button>
            <button
              className={`tab-btn ${filter === 'ctevt' ? 'active' : ''}`}
              onClick={() => setFilter('ctevt')}
            >
              CTEVT Health Merit
            </button>
            <button
              className={`tab-btn ${filter === 'alumni' ? 'active' : ''}`}
              onClick={() => setFilter('alumni')}
            >
              Distinguished Alumni (Doctors & Engineers)
            </button>
            <button
              className={`tab-btn ${filter === 'sports' ? 'active' : ''}`}
              onClick={() => setFilter('sports')}
            >
              Sports Champions
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid-3">
            {filteredHonors.map((item, idx) => (
              <div key={idx} className="card" style={{ overflow: 'hidden', borderTop: '4px solid var(--gold)' }}>
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/college-banner.png'; }}
                  />
                  <span className="badge badge-amber" style={{ position: 'absolute', top: '12px', right: '12px' }}>
                    {item.badge}
                  </span>
                </div>
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div
                      className="card-icon-box"
                      style={{ margin: 0, background: 'var(--gold-light)', color: 'var(--gold)' }}
                    >
                      <Icon name={item.icon} size={22} />
                    </div>
                    <h3 className="card-title" style={{ margin: 0, fontSize: '1.15rem' }}>
                      {item.name}
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--primary-accent)', fontWeight: 600, marginBottom: '12px' }}>
                    {item.title} • <span style={{ color: 'var(--muted)' }}>{item.year}</span>
                  </div>

                  <p className="card-text" style={{ fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Pride Banner */}
          <div
            style={{
              marginTop: '60px',
              background: '#ffffff',
              borderRadius: 'var(--radius)',
              padding: '40px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)'
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center', gap: '30px' }}>
              <div>
                <span className="section-tag">
                  <Icon name="award" size={14} /> Legacy of Glory
                </span>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '12px' }}>
                  Write Your Name in the Pioneers Hall of Fame
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--slate)', lineHeight: '1.6', marginBottom: '20px' }}>
                  With disciplined guidance from our expert teachers, top-tier laboratories, and personalized mentorship, you too can achieve top board ranks and secure your dream career.
                </p>
                <button className="btn btn-secondary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Apply for Admission Today
                </button>
              </div>

              <div style={{ background: 'var(--light-bg)', padding: '24px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>100% Board Pass Record in Science & Management</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>Over 50+ Medical & Engineering Entrance Qualifiers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>District Champions in Volleyball & Athletics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>11,000+ Alumni Impacting Society Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Glory Photo Gallery */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="award" size={14} /> Moments of Glory
            </span>
            <h2 className="section-title">Hall of Fame Gallery</h2>
            <p className="section-subtitle">
              A glimpse of the felicitation ceremonies, trophy lifts and alumni meets that mark our proudest milestones. Click any photo to view it larger.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {moments.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{ overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setPreviewPhoto(item)}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/college-banner.png';
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 43, 92, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="card-body" style={{ padding: '18px 20px' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate)', lineHeight: '1.5', margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {previewPhoto && (
        <div className="modal-overlay" onClick={() => setPreviewPhoto(null)}>
          <div
            className="modal-card"
            style={{ maxWidth: '800px', padding: 0, overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={previewPhoto.image}
                alt={previewPhoto.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
              />
              <button
                onClick={() => setPreviewPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon name="x" size={20} />
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge badge-amber" style={{ marginBottom: '8px' }}>
                {previewPhoto.tag}
              </span>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem', marginBottom: '8px' }}>
                {previewPhoto.title}
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {previewPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hallpage;