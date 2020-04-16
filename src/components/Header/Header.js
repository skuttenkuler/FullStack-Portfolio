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
                        <Link className="header__logo-link" to="/">
                            <img className="logo__image" src={require('../../assets/images/Circle.png')} alt="logo"/>
                        </Link>
                            <h1 className="logo__title">Sam Kuttenkuler</h1>
                    <Nav context="header"/>
                    <div className="header__menu" onClick={"showsidebar"}></div>
                    {/* Sidebar */}
                </div>

            </header>
        );
    }
}

export default Header;