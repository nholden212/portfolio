import React, { Component } from 'react';

class ResumePage extends Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">Nick Holden</h1>
        <div className="ResumeSection" id="ContactInfo">
          <h3>Contact Info</h3>
          <div className="ResumeSectionContentSpaced">
            <p>1717 16th Ave. #10<br></br>Seattle, Washington 98122</p>
            <p>(925) 588-1170</p>
            <p>nholden212@gmail.com</p>
          </div>
        </div>
        <div className="ResumeSection" id="Links">
          <h3>Links</h3>
          <div className="ResumeSectionContentSpaced">
            <button><a href="https://www.linkedin.com/in/nick-holden-32174296/" target="_blank">LinkedIn</a></button>
            <button><a href="https://github.com/nholden212" target="_blank">Github</a></button>
          </div>
        </div>
        <div className="ResumeSection" id="Summary">
          <h3>Summary</h3>
          <p>After beginning my career at a technical recruiting agency
            in San Francisco, I realized that while I had a strong 
            interest in tech, I did not have a passion for sales or cold 
            calling. I reevaluated my options, and after some thorough 
            research I enrolled in the Bloc online coding boot camp to 
            learn software development from the ground up. I have recently 
            moved to Seattle and am looking to work as a software engineer 
            for an upstanding organization where I feel like my work is 
            making a difference.</p>
        </div>
        <div className="ResumeSection" id="Tech">
          <h3>Technologies</h3>
          <p><strong>Frontend: </strong>HTML, CSS, JavaScript, React.js, Bootstrap, Material UI, JSX, EJS</p>
          <p><strong>Backend: </strong>Node.js, Express, npm, yarn</p>
          <p><strong>Databases: </strong>SQL, PostgreSQL, Firebase</p>
        </div>
        <div className="ResumeSection" id="Education">
          <h3>Education</h3>
          <div>
            <p><strong>University of Oregon</strong></p>
            <p>2013-2017</p>
            <p>Bachelor's of Science in Business Administration - Marketing</p>
          </div>
          <div>
            <p><strong>Bloc.io Online Coding Bootcamp</strong></p>
            <p>February - November 2018</p>
            <p>Software Engineering Certification</p>
          </div>
        </div>
        <div className="ResumeSection" id="History">
          <h3>Work History</h3>
          <div>
            <p><strong>Workbridge Associates</strong></p>
            <p>Technical Recruiter, August - December 2017</p>
            <ul>
              <li>Sourced qualified senior software engineering candidates</li>
              <li>Spoke with hiring managers of engineering teams</li>
              <li>Gained an in-depth knowledge of engineering teams and the tech industry in San Francisco</li>
            </ul>
          </div>
        </div>  
      </div>
    );
  }
}

export default ResumePage;
