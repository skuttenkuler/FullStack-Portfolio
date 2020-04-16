import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './main.scss'

const App = () => (
    <Router>
      <div>
        <Header/>
        <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/>}></Route>
        <Route exact path="/" component={Home}/>
        <Footer/>
      </div>
    </Router>
  );

export default App;
