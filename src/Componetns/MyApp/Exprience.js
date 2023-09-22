import React from 'react';
import Navbar from './Navbar';
import './Experience.css'; // Import the CSS file
import Footer from './Footer';
function Experience() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <h1>Experience</h1>
        <p>Your experience content goes here.</p>
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

export default Experience;
