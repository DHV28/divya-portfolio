import React from "react";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="logo-mark"></span>
          <span className="logo-text">Divya Hamshini</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#design">Design</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
