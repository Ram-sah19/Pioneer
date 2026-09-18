import React from 'react';
import Hero from './Hero';
import Notice from './Notice';
import Welcome from './Welcome';
import Ourpgm from './Ourpgm';
import ScholarshipCalculator from '../../components/ScholarshipCalculator';
import Achivements from './Achivements';
import Ourstd from './Ourstd';
import Life from './Life';

function Homepage() {
  return (
    <div>
      <Hero />
      <Notice />
      <Welcome />
      <Ourpgm />

      {/* Interactive Scholarship & Eligibility Calculator Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <ScholarshipCalculator />
        </div>
      </section>

      <Achivements />
      <Ourstd />
      <Life />
    </div>
  );
}

export default Homepage;