
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" className="brand">
          <img
            src="/images/talent-hunt-logo.png"
            alt="Talent Hunt TH"
            className="company-logo"
          />
          <span className="company-name">Talent Hunt TH</span>
        </a>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
