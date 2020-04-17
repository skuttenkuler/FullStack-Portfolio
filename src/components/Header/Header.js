import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class Header extends Component {
    //side bar state
    state = {
        sideBar: false
    }

    render() {
        return(
            <header className="header">
                <div className="wrapper wrapper-header">
                <Nav className="main-nav" context="header"/>
                            <img className="logo__image" src={require('../../assets/img/Circle.png')} alt="logo"/>
                            <h1 className="logo__title">Sam Kuttenkuler</h1>
                    <div className="header__menu" onClick={"showsidebar"}></div>
                    {/* Sidebar */}
                </div>

            </header>
        );
    }
}

export default Header;