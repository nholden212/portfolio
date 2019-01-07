import React, { Component } from 'react';
import Project from './Project';

import login from './../assets/LogIn.png';
import addForm from './../assets/AddForm.png';
import list from './../assets/List.png';

class ProjectsPage extends Component {

  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">Projects</h1>
        <div className="MainProjectContainer">
          <Project
            title="Bucket List"
            description="This is a simple app which allows users to create a bucket list. 
            Written in Node.js on a Postgres database, it follows a simple MVC architectural framework. 
            The goal of this app is to help users keep track of all the things they want to do but have 
            never make time for. Users can perform basic CRUD operations for items within their list, as 
            well as toggle each item as complete or incomplete. Items can also be tagged as either a life 
            experience, a travel destination, or a local attraction."
            images={[login, addForm, list]}
            alts={["Login page", "Add item form", "List view"]}
            deployedURL='https://nholden212-bucket-list.herokuapp.com/'
            gitHubURL='https://github.com/nholden212/bucket-list-app'
          />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
