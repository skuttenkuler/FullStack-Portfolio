# My Portfolio
Personal portfolio built with React.

# Deployed Link
[samkuttenkuler.com](http://www.samkuttenkuler.com/)


# Visual

![Alt text](./src/assets/img/portfolio.gif?raw=true "Preview")


# Technologies
* [React](https://reactjs.org/)
* [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
* JSX
* [SCSS](https://sass-lang.com/)

* [Heroku](https://www.heroku.com/)




# Code Snippets
    - Pulling project data and mapping to render each project component.

```JSX
   const Portfolio = () => {
    return (
        <div id="portfolio" className="wrapper">
            <Fade right delay={80} duration={900}>
            <h1 className="projects">Portfolio</h1>
            <hr className="line"/>
            </Fade>
            {projects.map(app => <Project key={app.id} {...app}/>)}
        </div>
    );
};

const Project = ({  id,
                    title,
                    deployed,
                    code,
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
```

    

# Author
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)