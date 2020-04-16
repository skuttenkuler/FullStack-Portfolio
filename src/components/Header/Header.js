import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';


class Header extends Component {
    //side bar state
    state = {
        sideBar: false
    }

    render() {
        return(
            <header className="header">
                <div className="wrapper wrapper-header">
                    {/* logo link */}
                    <Link className="header__logo-link" to="/">
                        <div className="logo"></div>
                    </Link>
                    <Nav context="header"/>
                    <div className="header__menu" onClick={"showsidebar"}></div>
                    {/* Sidebar */}
                </div>

            </header>
        );
    }
}

export default Header;