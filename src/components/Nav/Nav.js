import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Resume from '../Resume/pdfButton'
const Nav = props => {
    const {context, history} = props;
    const getClass = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : '' }`
    );

    return (
        <div className={`main-nav main-nav--${context}`}>
            <NavLink className={getClass("/about")} exact to="/about">ABOUT</NavLink>
            <NavLink className={getClass("/portfolio")} exact to="/portfolio">PORTFOLIO</NavLink>
            <NavLink className={getClass("/contact")} exact to="/contact">CONTACT</NavLink>
            <Resume/>
        </div>
    );
};

export default withRouter(Nav);