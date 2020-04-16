import React from 'react';
import SocialLinks from '../ui/Social';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper-footer">
                <div className="footer__links">
                    <SocialLinks/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;