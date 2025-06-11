// src/components/Navbar.js
import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My Portfolio</h1>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/resume/Thapaswini Vanukuri.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
