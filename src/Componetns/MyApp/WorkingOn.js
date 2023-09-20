import React from 'react';
import Navbar from './Navbar';
import './WorkingOn.css'; // Import the CSS file
import Footer from './Footer';

function WorkingOn() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <h1>Working On</h1>
        <p>
          "I work as a full-stack developer at SOLIZE in Bangalore, where I'm
          part of a team that develops software for Product Lifecycle
          Management (PLM). Essentially, I help create and maintain digital
          solutions that enable organizations to efficiently manage the entire
          lifecycle of their products, from design and manufacturing to
          maintenance and retirement. My role involves both front-end and
          back-end development, allowing me to work on user interfaces."
        </p>
      </div>
      <div className="logo">
        <img src="/Images/Rupesh.jpeg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here...
        <Footer/></p>
      </div>
    </>
  );
}

export default WorkingOn;
