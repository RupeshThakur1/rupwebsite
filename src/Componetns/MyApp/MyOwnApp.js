import React, { useState } from 'react';
import './style.css'; // Your main CSS file
import './video.css'; // Import the video-specific CSS
import Navbar from './Navbar';
import boxes from './BoxData';
import Experience from './Exprience';
import Greeting from './Greeting';
import Footer from './Footer';
import videoSrc from './videosrc/firstVid.mp4';


function MyOwnApp() {
  const [greetingComplete, setGreetingComplete] = useState(false);

  const handleGreetingComplete = () => {
    setGreetingComplete(true);
  };

  return (
    <div className={`my-own-app ${!greetingComplete ? 'show-greeting' : ''}`}>
      {!greetingComplete && <Greeting onGreetingComplete={handleGreetingComplete} />}
      <Navbar />
      <div className="video-content-container">
        <video autoPlay muted loop id="header-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="login-signup-buttons">
          <button onClick={''}>Login</button>
          <button onClick={''}>Signup</button>
        </div> */}
        <div className="video-text">
          <h1>TAKE YOUR STEPS TOWARDS TECHNOLOGY</h1>
        </div>
        <div className="content">
          <h2 className="Trendings">Trending</h2>
          <div className="box-container">
            {boxes.map((box, index) => (
              <div className="box" key={index}>
                <img src={box.imageSrc} alt={box.title} />
                <div className="box-description">
                  <h2>{box.title}</h2>
                  <p>{box.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      <div className="logo">
        <img src="/Images/Rupesh.jpeg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here... <Footer /></p>
      </div>
      <Experience />
      <a href="https://docs.google.com/document/d/1bzfv20xT899mPeauJSL19KqJL0DxR9J4YAdSRRO-g40/edit?usp=drivesdk">
        Visit Example Website
      </a>
    </div>
  );
}

export default MyOwnApp;
