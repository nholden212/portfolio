import React, { Component } from 'react';
import Project from './Project';

class ProjectsPage extends Component {

  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">Projects</h1>
        <div className="PageContent">
          <Project
            title="Example Project"
            description="A brief paragraph describing the project will go here."
            images={['']}
            deployedURL=''
            gitHubURL=''
          />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
