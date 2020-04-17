import React from 'react';
import { Fade } from 'react-reveal'

const About = () => {
    return (
        <div className="about" id="about">
            <Fade left delay={80} duration={900}>
                    <div className="about__section">
                        <img className="about__image" src={require("../../assets/img/headshot.png")} alt="headshot" />
                        <h1 className="about__title">Full Stack Engineer</h1>
                        <p className="about__text"> Full Stack Web Developer with a Bachelor’s in Music that brings a 
                                                    strong creative approach to not only the front end design but problem 
                                                    solving as well. Recently procuring certifications from Stanford University 
                                                    in Machine Learning as well as a certificate in Full Stack Web Development 
                                                    from UC Berkeley. I utilize my creativity and knowledge of a variety of tools 
                                                    such as React, Django, AWS, Python, and Javascript to build dynamic 
                                                    and engaging applications for web and mobile.  
                                    
                                                </p>

                    </div>
            </Fade>
        </div>
    )
}
export default About