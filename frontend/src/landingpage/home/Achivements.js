import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Achivements() {
  const { navigateTo } = useNavigation();

  const achievements = [
    {
      metric: 'Top Ranks',
      title: 'District & Province Board Merit',
      desc: 'Consistent top GPA scorers in NEB Class 11 and 12 Board Examinations across Syangja district and Gandaki Province in both Science and Management streams.',
      icon: 'award'
    },
    {
      metric: 'MBBS & IOE',
      title: 'Medical & Engineering Entrances',
      desc: 'Dozens of Pioneers science alumni have successfully cleared national common medical entrance exams (CEE/MBBS) and Pulchowk/IOE Engineering entrance tests.',
      icon: 'sparkles'
    },
    {
      metric: '100% Pass',
      title: 'CTEVT Health Licensure',
      desc: 'Our PCL in General Medicine (Health Assistant) cohorts have consistently achieved top pass percentages in the Nepal Health Professional Council (NHPC) licensure examinations.',
      icon: 'shieldCheck'
    },
    {
      metric: 'Champions',
      title: 'Inter-College Sports & Athletics',
      desc: 'Multiple championship trophies in district-level volleyball, badminton, athletics meets, and inter-school science exhibition contests.',
      icon: 'award'
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="award" size={14} /> Milestones of Glory
          </span>
          <h2 className="section-title">Achievements & Excellence</h2>
          <p className="section-subtitle">
            Our students continuously set high benchmarks in academic board examinations, national professional entrance contests, and regional sports meets.
          </p>
        </div>

        <div className="grid-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="card" style={{ borderTop: '4px solid var(--primary-accent)' }}>
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div
                  className="card-icon-box"
                  style={{
                    margin: '0 auto 16px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary-accent)'
                  }}
                >
                  <Icon name={item.icon} size={26} />
                </div>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: 'var(--secondary-crimson)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.metric}
                </span>
                <h3 className="card-title" style={{ fontSize: '1.12rem', marginTop: '6px' }}>
                  {item.title}
                </h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <button className="btn btn-primary" onClick={() => navigateTo('halloffame')}>
            <Icon name="award" size={16} /> View Hall of Fame & Notable Alumni
          </button>
        </div>
      </div>
    </section>
  );
}

export default Achivements;