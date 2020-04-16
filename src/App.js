import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home'
import './main.scss'

const App = () => (
    <Router>
      <div>
        <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/>}></Route>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );

export default App;
