import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
      super(props);
  }
  
    render() {
    return (
      <div className="Project">
        <h3 className="ProjectTitle">{this.props.title}</h3>
        <p className="ProjectDescription">{this.props.description}</p>
        <div className="ProjectSlideshow">Screenshot slideshow will go here</div>
        <h5 className="ProjectDeployedURL">Check out the deployed project <a className="" href={this.props.deployedURL}>here</a></h5>
        <h5 className="ProjectGitHubURL">Check out the code on GitHub <a href={this.props.gitHubURL}>here</a></h5>
      </div>
    );
  }
}

export default Project;
