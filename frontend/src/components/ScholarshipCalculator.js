import React, { useState } from 'react';
import { useNavigation } from '../navigation';
import Icon from '../Icons';

export const ScholarshipCalculator = () => {
  const { openApplyModal } = useNavigation();
  const [gpa, setGpa] = useState(3.65);
  const [program, setProgram] = useState('+2 Science');
  const [quota, setQuota] = useState('merit');

  // Compute scholarship result
  const calculateScholarship = () => {
    let waiver = 0;
    let title = 'Standard Admission';
    let badgeColor = 'badge-blue';

    if (gpa >= 3.8) {
      waiver = 100;
      title = '100% Full Tuition Waiver (Pioneers Golden Merit Award)';
      badgeColor = 'badge-red';
    } else if (gpa >= 3.6) {
      waiver = 75;
      title = '75% Tuition Scholarship (District Academic Honor)';
      badgeColor = 'badge-amber';
    } else if (gpa >= 3.2) {
      waiver = 50;
      title = '50% Tuition Scholarship (Special Academic Merit)';
      badgeColor = 'badge-green';
    } else if (gpa >= 2.8) {
      waiver = 30;
      title = '30% Early Bird & Merit Incentive';
      badgeColor = 'badge-blue';
    } else {
      waiver = 15;
      title = 'General Admission Counseling Eligible';
      badgeColor = 'badge-blue';
    }

    if (quota === 'district' && waiver < 50) waiver = 50;
    if (quota === 'inclusion' && waiver < 60) waiver = 60;
    if (quota === 'sports' && waiver < 40) waiver = 40;

    return { waiver, title, badgeColor };
  };

  const result = calculateScholarship();

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: '1px solid #e2e8f0',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'var(--primary-light)',
            color: 'var(--primary-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon name="sparkles" size={24} />
        </div>
        <div>
          <span className="section-tag" style={{ margin: 0, padding: '3px 10px', fontSize: '0.75rem' }}>
            Interactive Demo Tool
          </span>
          <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem', margin: '4px 0 0', fontWeight: 800 }}>
            SEE GPA & Scholarship Eligibility Calculator
          </h3>
        </div>
      </div>

      <p style={{ fontSize: '0.94rem', color: 'var(--slate)', marginBottom: '25px', lineHeight: '1.6' }}>
        Discover your eligibility and estimated tuition fee waiver at Pioneers' Higher Education Academy based on your Secondary Education Examination (SEE) performance.
      </p>

      <div className="grid-2" style={{ gap: '30px', alignItems: 'center' }}>
        {/* Controls */}
        <div>
          <div className="form-group" style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label className="form-label" style={{ margin: 0 }}>
                Your SEE GPA Score:
              </label>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--primary-accent)',
                  background: 'var(--primary-light)',
                  padding: '2px 10px',
                  borderRadius: '6px'
                }}
              >
                {Number(gpa).toFixed(2)} GPA
              </span>
            </div>
            <input
              type="range"
              min="2.00"
              max="4.00"
              step="0.05"
              value={gpa}
              onChange={(e) => setGpa(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary-accent)', cursor: 'pointer', height: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--muted)', marginTop: '4px' }}>
              <span>2.00 (Pass)</span>
              <span>3.00 (B+)</span>
              <span>3.60 (A+)</span>
              <span>4.00 (Top)</span>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '14px', marginBottom: '18px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Target Program</label>
              <select
                className="form-control"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="+2 Science">+2 Science (NEB)</option>
                <option value="+2 Management">+2 Management (NEB)</option>
                <option value="+2 Humanities & Law">+2 Humanities & Law</option>
                <option value="CTEVT General Medicine (HA)">CTEVT General Medicine (HA)</option>
                <option value="CTEVT Civil Engineering">CTEVT Civil Engineering</option>
                <option value="Bachelor of Business Studies (BBS)">Bachelor of Business Studies (BBS)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Special Quota / Category</label>
              <select
                className="form-control"
                value={quota}
                onChange={(e) => setQuota(e.target.value)}
              >
                <option value="merit">General Open Merit</option>
                <option value="district">Syangja District Rural Quota</option>
                <option value="inclusion">Underprivileged / Female Quota</option>
                <option value="sports">Sports & Extracurriculars</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="tab-btn"
              style={{ padding: '4px 12px', fontSize: '0.78rem' }}
              onClick={() => setGpa(3.9)}
            >
              Preset: 3.90 GPA (Topper)
            </button>
            <button
              type="button"
              className="tab-btn"
              style={{ padding: '4px 12px', fontSize: '0.78rem' }}
              onClick={() => setGpa(3.65)}
            >
              Preset: 3.65 GPA (A+)
            </button>
            <button
              type="button"
              className="tab-btn"
              style={{ padding: '4px 12px', fontSize: '0.78rem' }}
              onClick={() => setGpa(3.25)}
            >
              Preset: 3.25 GPA (A)
            </button>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            padding: '28px',
            borderRadius: 'var(--radius)',
            color: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}
        >
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#38bdf8',
              display: 'inline-block',
              marginBottom: '12px'
            }}
          >
            Instant Assessment Result
          </span>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fde68a', lineHeight: 1 }}>
              {result.waiver}%
            </span>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0' }}>
              Tuition Fee Waiver
            </span>
          </div>

          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '14px' }}>
            {result.title}
          </h4>

          <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Icon name="checkCircle" size={16} color="#4ade80" />
              <span>Full eligibility confirmed for <strong>{program}</strong>.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Icon name="checkCircle" size={16} color="#4ade80" />
              <span>Complimentary Entrance Mock Test & Guidebook included.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="checkCircle" size={16} color="#4ade80" />
              <span>Priority reservation in college bus routes and hostels.</span>
            </div>
          </div>

          <button
            className="btn btn-secondary"
            style={{ width: '100%', padding: '10px', fontSize: '0.92rem' }}
            onClick={openApplyModal}
          >
            <Icon name="graduationCap" size={16} /> Claim Scholarship & Apply Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCalculator;
