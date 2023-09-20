import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleMoreClick = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const handleMoreHover = () => {
    setIsMoreOpen(true);
  };

  const handleMoreLeave = () => {
    setIsMoreOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
    <ul>
      <li>
      <Link to="/">
          <i className="fa fa-home"></i> Home
</Link>
      </li>
      <li>
      <Link to="/images">
          <i className="fa fa-images"></i> Images</Link>
      </li>
      <li>
      <Link to="/contact">
          <i className="fa fa-envelope"></i> Contact</Link>
      </li>
      <li
        className={`more-dropdown ${isMoreOpen ? 'open' : ''}`}
        onMouseEnter={handleMoreHover}
        onMouseLeave={handleMoreLeave}
      >
       <a onClick={handleMoreClick}>
          <i className="fa fa-ellipsis-h"></i>More</a>
        {isMoreOpen && (
          <ul className="dropdown-menu">
            <li>
            <Link to="/skills">Skills</Link>
            </li>
            <li>
            <Link to="/exprience">Experience</Link>
            </li>
            
            <li>
            <Link to="/workingon">WorkingOn</Link>
            </li>
            <li>
            <Link to="/notes">Notes</Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  </nav>

  );
}

export default Navbar;
