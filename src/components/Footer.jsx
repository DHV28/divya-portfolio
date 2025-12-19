import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Divya Hamshini Viknesh.</p>
      <p className="footer-sub">
        Built with React · Designed with a mix of code, UX.
      </p>
    </footer>
  );
};

export default Footer;
