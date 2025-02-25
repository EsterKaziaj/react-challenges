import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Share Column */}
        <div className="footer-column">
          <h3>Social share</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Event Info Column */}
        <div className="footer-column">
          <h3>Event info</h3>
          <ul>
            <li><a href="#">Enter Now</a></li>
            <li><a href="#">Event Info</a></li>
            <li><a href="#">Course Maps</a></li>
            <li><a href="#">Race Pack</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Am I Registered?</a></li>
          </ul>
        </div>

        {/* Registration Column */}
        <div className="footer-column">
          <h3>Registration</h3>
          <ul>
            <li><a href="#">Volunteers</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Service Plus</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>

        {/* Schedule Column */}
        <div className="footer-column">
          <h3>Schedule</h3>
          <ul>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Volunteers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
