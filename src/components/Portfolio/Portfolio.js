import React from 'react';
import {projects} from '../../assets/data/projects';
import Project from '../Project/Project'
import {Fade} from 'react-reveal';


const Portfolio = () => {
    return (
        <div className="wrapper">
            <Fade right delay={80} duration={900}>
            <h1 className="projects">Portfolio</h1>
            <hr className="line"/>
            </Fade>
            {projects.map(app => <Project key={app.id} {...app}/>)}
        </div>
    );
};

export default Portfolio;