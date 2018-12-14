import React, { Component } from 'react';

class ContactPage extends Component {

  contactFormSubmit(e) {
    console.log("contactFormSubmit called");
  }

  render() {
    return (
      <div className="AboutPage">
        <h1>Contact</h1>
        <p><strong><a href="mailto:nholden212@gmail.com" target="_blank">Email Me!</a></strong></p>
        <p>If you don't have a default email set up, you can also get in touch with me by filling out the form below:</p>
        <form className="ContactForm" onSubmit={(e) => this.contactFormSubmit(e)}>
          <h4>Contact me:</h4>
          
            <label for="contact-firstName">First name:</label>
            <input type="text" id="contact-firstName"></input>
            <br></br>
            
            <label for="contact-lastName">Last name:</label>
            <input type="text" id="contact-lastName"></input>
            <br></br>
            
            <label for="contact-email">Your email:</label>
            <input type="email" id="contact-email"></input>
            <br></br>
            
            <label for="contact-body">Leave a message:</label>
            <textarea id="contact-body"></textarea>
            <br></br>
            
            <button type="Submit">Submit</button>

        </form>
      </div>
    );
  }
}

export default ContactPage;
