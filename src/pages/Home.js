import React from 'react';
import Landing from './Landing';
import {Element, scroller} from 'react-scroll';
import { Fade } from 'react-reveal';


const Home = () => {

    const scroll = element => {
        scroller.scrollTo(element, {
            duration:700,
            delay:100,
            smooth: true,
        })
    }
    return (
        <div className="home">
            <Fade>
            <div className="home__header">
                <div className="wrapper">
                    <img className="scroller" src={require('../assets/img/scroll.png')} alt="scroller"></img>
                        <div className="home__caption" onClick={() => scroll('landing')}></div>
                            <Fade right delay={80} duration={900}>
                                <h1 className="about_divide">About</h1>
                                <hr className="divide_line"/>
                            </Fade>
                        </div>
                </div>
                </Fade>
                    <Element name="landing">
                        <Landing/>
                    </Element>
                </div>
    )
}

export default Home;