import React from 'react';
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio';
const Landing = () => {
    return (
        <div className="landing">
            <div className="wrapper">
                <About/>
                <Portfolio/>
            </div>
        </div>
    )
}

export default Landing;