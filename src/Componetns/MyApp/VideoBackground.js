import React from 'react';
import './video.css';
import videoSrc from './videosrc/firstVid.mp4';

function VideoBackground() {
    return (
        <div className="video-content-container">
          <video autoPlay muted loop id="header-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <h1>TAKE YOUR STEPS TOWARDS TECHNOLOGY</h1>
          </div>
        </div>
      );
    }

export default VideoBackground;
