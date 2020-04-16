import React from 'react';
import Nav from '../components/Nav/Nav';
import Landing from './Landing';
import {Element, scroller} from 'react-scroll';


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
            <div className="home__header">
                <div className="wrapper">
                    <Nav context="home"/>
                    <div className="home__caption" onClick={() => scroll('landing')}>
                        About Me
                    </div>
                    <div className="home_scroll-down"></div>
                </div>
            </div>
            <Element name="landing">
                <Landing/>
            </Element>
        </div>
    )
}

export default Home;