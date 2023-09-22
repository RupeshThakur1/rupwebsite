import React, { useState } from 'react';
import './style.css'; // Your main CSS file
import './video.css'; // Import the video-specific CSS
import Navbar from './Navbar';
import boxes from './BoxData';
import Experience from './Exprience';
import Greeting from './Greeting';
import Footer from './Footer';
// import videoSrc from './videosrc/firstVid.mp4';
import VideoBackground from './VideoBackground';


function MyOwnApp() {
  const [greetingComplete, setGreetingComplete] = useState(false);

  const handleGreetingComplete = () => {
    setGreetingComplete(true);
  };

  return (
    <>
    <div className={`my-own-app ${!greetingComplete ? 'show-greeting' : ''}`}>
      {!greetingComplete && <Greeting onGreetingComplete={handleGreetingComplete} />}
      <Navbar />
     <VideoBackground/>
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
        <p className='respons1'>Your Message Here... <Footer /></p>
      </div>
      
   
    </>
  );
}

export default MyOwnApp;
