import React from 'react';

const SocialLinks = ({context}) => {
    return (
        <div className={`socials ${context === 'album' ? 'social__links' : ''}`}>
            <div className="social__github"></div>
            <div className="social__linkedin"></div>
        </div>
    );
};

export default SocialLinks;