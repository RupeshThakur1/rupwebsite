import React, { useEffect, useState } from 'react';

function Greeting({ onGreetingComplete }) {
  const [showGreeting, setShowGreeting] = useState(true);

  // Hide the greeting after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
      onGreetingComplete(); // Notify the parent component when the greeting is complete
    }, 1000);

    return () => clearTimeout(timer);
  }, [onGreetingComplete]);

  return (
    <>
      {showGreeting && (
        <div className="greeting-container">
          <div className="greeting">
            <div className="hands">
              <span role="img" aria-label="Hands">
                🙏
              </span>
            </div>
            <div className="text">Namaste</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Greeting;
