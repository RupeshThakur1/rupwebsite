import React from 'react';
import './footer.css'; // Import your footer CSS file if you have one
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Rupesh Thakur</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/rupesh-thakur-8983831a5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://instagram.com/rupesh_thakur_____?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100017458475099&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.youtube.com/@icon23" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href="rup123tkr@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
