import React, { Component } from 'react';
import headshot from './../assets/headshot.jpg';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <h1>About Nick</h1>
        <p className="Summary">
          Hey there! 
          <br></br> <br></br>
          My name is Nick. I'm a software engineer who recently moved to Seattle, WA.
          I started my career as a technical recruiter in San Francisco before deciding to 
          leave the phones behind and get into tech myself. I primarily work in JavaScript, 
          building apps with React, Node, and a variety of databases and design frameworks. 
          <br></br> <br></br>
          Even if I'm not coding (or at a meetup, or on the job hunt), I'm always hustling - 
          whether it's walking dogs for Wag, playing basketball, or enjoying the company of 
          family & friends at my famous Movie Night Mondays. I also make music as a hobby, 
          and you can check that out right here on this site.
          <br></br> <br></br>
          Check out some of my projects, and shoot me a text if you want to get in touch!
        </p>
        <img id="headshot" src={headshot}></img>
      </div>
    );
  }
}

export default AboutPage;
