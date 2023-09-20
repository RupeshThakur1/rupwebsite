import React from 'react';
import './VideoStyle.css'; // Import the CSS file
import videoSrc from './videosrc/firstVid.mp4';
function VideoBackground({ videoSrc }) {
    return (
        <div className="video-container">
            <h1>Video Example</h1>
            <video autoPlay muted loop id="header-video">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoBackground;