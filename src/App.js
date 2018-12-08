import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import MusicPage from './components/MusicPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="Navbar-main">
            <Link className="Nav-link" to="/about">About</Link>
            <Link className="Nav-link" to="/projects">Projects</Link>
            <Link className="Nav-link" to="/resume">Resume</Link>
            <Link className="Nav-link" to="/contact">Contact</Link>
            <Link className="Nav-link" to="/music">Music</Link>
          </nav>
        </header>
        <main className="main">
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/music" component={MusicPage} />
        </main>
      </div>
    );
  }
}

export default App;
