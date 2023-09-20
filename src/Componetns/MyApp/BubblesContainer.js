import React from 'react';
import './Image.css'; // Import the CSS file for styling

const BubblesContainer = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="bubbles-container">
      {Array.from({ length: 60 }, (_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * (window.innerWidth - 70) + 125}px`,  // Random horizontal position
            backgroundColor: getRandomColor(), // Random background color
            opacity: Math.random(), // Random opacity
            animationDuration: `${Math.random() * 5 + 2}s`, // Random animation duration
            animationDelay: `${Math.random() * 3}s`, // Random animation delay
          }}
        ></div>
      ))}
    </div>
  );
};

export default BubblesContainer;
