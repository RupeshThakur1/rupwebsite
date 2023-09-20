import React from 'react';
import Navbar from './Navbar';
import './contact.css'; // Make sure to use the correct CSS filename
import Footer from './Footer';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function Contact({ content }) {
  return (
    <>
      <div className="contact-container">
        <Navbar />
        <div className="signal"></div> {/* Signal background moved here */}
        <div className="contact-content">
          <h1>{content}</h1>
          <h3>My Contacts</h3>
          <ul className="contact-list">
            <li>
              <FaPhone /> {/* Phone icon */}
              <span className="contact-label">WhatsApp:</span>{' '}
              <span className="contact-info contact-blue contact-bigger">9975246448</span>
            </li>
            <li>
              <FaEnvelope /> {/* Email icon */}
              <span className="contact-label">Email:</span>{' '}
              <span className="contact-info contact-blue contact-bigger">rup123tkr@gmail.com</span>
            </li>
            <li>
              <FaLinkedin /> {/* LinkedIn icon */}
              <span className="contact-label">LinkedIn:</span>{' '}
              <span className="contact-info contact-blue contact-bigger">Rupesh Thakur</span>
            </li>
            <li>
              <FaInstagram /> {/* Instagram icon */}
              <span className="contact-label">Instagram:</span>{' '}
              <span className="contact-info contact-blue contact-bigger">rupesh_thakur_____</span>
            </li>
            <li>
              <FaYoutube /> {/* Youtube */}
              <span className="contact-label">Youtube:</span>{' '}
              <span className="contact-info contact-blue contact-bigger">I con</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo">
        <img src="/Images/Rupesh.jpeg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here...
          <Footer />
        </p>
      </div>
    </>
  );
}

export default Contact;
