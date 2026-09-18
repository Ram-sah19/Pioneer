import React from 'react';
import Hero from './Hero';
import Achivements from './Achivements';
import Notice from './Notice';
import Ourpgm from './Ourpgm';
import Welcome from './Welcome';
import Ourstd from './Ourstd';
import Life from './Life';
import Navbar from '../../Navbar';
import Footar from '../../Footar';

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Achivements />
            <Notice />
            <Ourpgm />
            <Welcome />
            <Ourstd />
            <Life />
            <Footar />
        </>
    );
}

export default Homepage;