import React, { Component } from 'react';
import Project from './Project';

class ProjectsPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <h1>Projects</h1>
        <p>More content coming - stay tuned!</p>
        <Project title="ExampleTitle" deployedURL="https://www.reddit.com/r/survivor/" />
      </div>
    );
  }
}

export default ProjectsPage;
