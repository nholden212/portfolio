import React, { Component } from 'react';
import Project from './Project';

class ProjectsPage extends Component {

  render() {
    return (
      <div className="AboutPage">
        <h1>Projects</h1>
        <Project
          title="Example Project"
          description="A brief paragraph describing the project will go here."
          images={['']}
          deployedURL=''
          gitHubURL=''
        />
      </div>
    );
  }
}

export default ProjectsPage;
