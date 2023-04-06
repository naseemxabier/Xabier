import React from 'react';
import './footer.css';
import {Link} from "react-router-dom"


function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        
        <nav className="footer__nav">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <div className="footer__copy">
          <p>© 2023 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
