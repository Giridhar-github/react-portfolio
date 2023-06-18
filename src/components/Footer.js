import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Falmengo</h1>
      </div>
      <div className="footer-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a href="">Gallery</a>
      </div>
      <div className="footer-newsletter">
        <h3>Contact Us</h3>
        <div className="footer-input">
          <input type="text" placeholder="Enter your email Id" />
          <button type="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
