import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Notes({ content }) {
  return (<>
   <Navbar />
    <div>
      <h1>{content}</h1>
      <p>Welcome to Notes {content}.</p>
    </div>
    <div className="logo">
        <img src="/Images/rupesh.jpg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here...
        <Footer/></p>
      </div>
    </>
  );
}

export default Notes;
