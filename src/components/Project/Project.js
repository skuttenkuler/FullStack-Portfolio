import React from 'react';
import Fade from 'react-reveal/Fade';


const Project = ({  id,
                    title,
                    deployed,
                    code,
                    description,
                    thumbnail }) => {
    return (
        <Fade right delay={id*80} duration={900}>
            <div className="project">
                <a href={deployed}><img src={thumbnail} className="project__thumbnail" alt="thumbnail"/></a>
                <div className="project__caption">
                   <h1>{title}</h1> 
                   <button className="project__button"><a href={code}>Github</a></button>
                </div>
            </div>
                
        </Fade>
    )
}

export default Project;