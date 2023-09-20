import React, { useState } from 'react';
import Navbar from './Navbar';
import Pics from './Pics';
import './style.css'
import BubblesContainer from './BubblesContainer'; // Import the BubblesContainer component
import './Image.css'; // Import the CSS file
import Footer from './Footer';

function Images({ content }) {
  const [enlargedImage, setEnlargedImage] = useState(null);

  function handleImageClick(image) {
    setEnlargedImage(image);
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>{content}</h1>

        {/* Render the BubblesContainer component */}
        <BubblesContainer />

        {enlargedImage && (
          <img
            src={enlargedImage}
            alt="Enlarged Image"
            className="enlarged"
            onClick={() => setEnlargedImage(null)} // Clicking the enlarged image should close it
          />
        )}

        <div className="images-container">
          {Object.values(Pics).map((image, index) => (
            <div className="image" key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image)} // Handle click to enlarge the image
              />
            </div>
          ))}
        </div> 
      </div> 
      <div className="logo">
        <img src="/Images/Rupesh.jpg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here...
        <Footer/></p>
      </div>
     
    </>
  );
}

export default Images;