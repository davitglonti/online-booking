import React from 'react';
import './Footer.css';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <h2>exploreEra</h2>
        <p>Travel agency which helps...</p>
        <div className="social-icons">
          <a href="#">Follow us</a>
          <div className="social-networks">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
      <div className="right-section">
        <h3>Contact Us</h3>
        <p>123 Street Name, City, Country</p>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;