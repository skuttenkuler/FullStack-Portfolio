import React from 'react';
import SocialLinks from '../ui/Social';
import Contact from '../Contact/Contact';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper-footer">
                <div className="footer__contact">
                    <h3 className="contact-head">Get in Contact!</h3>
                    <Contact/>
                </div>
                <div className="footer__links">
                    <SocialLinks/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;