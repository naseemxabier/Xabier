import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        
        <nav className="footer__nav">
          <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className="footer__copy">
          <p>© 2023 All rigths reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
