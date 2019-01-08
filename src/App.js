import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import * as firebase from 'firebase';

import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import MusicPage from './components/MusicPage';

import { FaUser, FaCode, FaFile, FaEnvelope, FaMusic } from 'react-icons/fa';

var config = {
  apiKey: "AIzaSyD3laknF4pjp0EESF-u4Dstly-_frk-Q1k",
    authDomain: "portfolio-98c08.firebaseapp.com",
    databaseURL: "https://portfolio-98c08.firebaseio.com",
    projectId: "portfolio-98c08",
    storageBucket: "portfolio-98c08.appspot.com",
    messagingSenderId: "499786435163"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="Nav-link" to="/"><FaUser/></Link>
          <Link className="Nav-link" to="/projects"><FaCode/></Link>
          <Link className="Nav-link" to="/resume"><FaFile/></Link>
          <Link className="Nav-link" to="/contact"><FaEnvelope/></Link>
          <Link className="Nav-link" to="/music"><FaMusic/></Link>
        </header>
        <main className="Main">
          <Route exact path="/" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" render={(props) => <ContactPage firebase={firebase} />} />
          <Route path="/music" component={MusicPage} />
        </main>
      </div>
    );
  }
}

export default App;
