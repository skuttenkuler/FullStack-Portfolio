import React from 'react';
import {projects} from '../../assets/data/projects';
import Project from '../Project/Project'



const Portfolio = () => {
    return (
        <div className="wrapper">
            <h1 className="projects">Portfolio</h1>
            <hr/>
            {projects.map(app => <Project key={app.id} {...app}/>)}
        </div>
    );
};

export default Portfolio;