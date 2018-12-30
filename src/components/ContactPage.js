import React, { Component } from 'react';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
    this.messagesRef = this.props.firebase.database().ref('contact-messages');
  }
  

  contactFormSubmit(e) {
    e.preventDefault();
    if (!this.state.firstName ||
        !this.state.lastName ||
        !this.state.email ||
        !this.state.message) { return }
    this.messagesRef.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    });
    this.setState({ firstName: "", lastName: "", email: "", message: "" });
  }

  updateFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  updateLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updateMessage(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">Contact</h1>
        <div className="PageContent">
          <p><strong><a href="mailto:nholden212@gmail.com" target="_blank">Email Me!</a></strong></p>
          <p>If you don't have a default email set up, you can also get in touch with me by filling out the form below:</p>
          <form className="ContactForm" onSubmit={(e) => this.contactFormSubmit(e)}>
            <h4>Contact me:</h4>
            
              <label hmtlFor="contact-firstName">First name:</label>
              <input type="text" id="contact-firstName" value={this.state.firstName} onChange={(e) => this.updateFirstName(e)}></input>
              <br></br>
              
              <label htmlFor="contact-lastName">Last name:</label>
              <input type="text" id="contact-lastName" value={this.state.lastName} onChange={(e) => this.updateLastName(e)}></input>
              <br></br>
              
              <label htmlFor="contact-email">Your email:</label>
              <input type="email" id="contact-email" value={this.state.email} onChange={(e) => this.updateEmail(e)}></input>
              <br></br>
              
              <label htmlFor="contact-body">Leave a message:</label>
              <textarea id="contact-body" value={this.state.message} onChange={(e) => this.updateMessage(e)}></textarea>
              <br></br>
              
              <button type="Submit">Submit</button>

          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
