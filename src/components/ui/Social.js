import React from 'react';

const SocialLinks = ({context}) => {
    return (
        <div className={`socials ${context === 'album' ? 'social__links' : ''}`}>
            <a href="//www.github.com/skuttenkuler" >
                <i style={{color:"#fff"}} className="fa fa-github fa-4x">
                    <span className="screen-reader-text"></span>
                </i>
            </a>
            <a href="//linkedin.com/in/skdev91" >
                <i style={{color:"#fff"}} className="fa fa-linkedin fa-4x">
                    <span className="screen-reader-text"></span>
                </i>
            </a>
        </div>
    );
};

export default SocialLinks;