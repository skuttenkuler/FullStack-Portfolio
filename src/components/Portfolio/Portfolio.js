import React from 'react';
import {projects} from '../../assets/data/projects';
import Project from '../Project/Project'



const Portfolio = () => {
    return (
        <div className="wrapper">
            {projects.map(app => <Project key={app.id} {...app}/>)}
        </div>
    );
};

export default Portfolio;