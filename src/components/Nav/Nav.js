import React from 'react';
import Resume from '../Resume/pdfButton'
const Nav = () => {
   
    return (
        <div className="main-nav ">
            <li className="main-nav--header"><a href="#about">ABOUT</a></li>
            <li className="main-nav--header"><a href="#portfolio">Portfolio</a></li>
            <li className="main-nav--header"><a href="#contact">Contact</a></li>
            <Resume/>
        </div>
    );
};

export default Nav;