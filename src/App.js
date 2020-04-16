import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './main.scss'
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => (
    <Router>
      <div>
        <Header/>
        <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/>}></Route>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Footer/>
      </div>
    </Router>
  );

export default App;
