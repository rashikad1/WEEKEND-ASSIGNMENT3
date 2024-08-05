import React from 'react';
import '../css/Contact.css';

const Contact = ({ navigateTo }) => {
  return (
    <div className="contact-container">
      <div className="header">
        <h1>B.planet</h1>
      </div>
      <div className="contact-content">
        <h2>Contact us</h2>
        <div className="contact-form">
          <div className="contact-left">
            <h3>Stay Updated</h3>
            <p>Need to get in touch with us?</p>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
          <div className="contact-right">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </div>
        </div>
        <button onClick={() => navigateTo('home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Contact;
