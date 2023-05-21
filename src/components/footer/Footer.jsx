import React from "react";

import "./footer.css";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="desk-footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-heading">About Us</h2>
            <p>
              AttireX is a fashion e-commerce website website that provides
              high-quality products to our customers at affordable prices.
            </p>
          </div>
          <div className="footer-section contact">
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="contact-list">
              <li>
                <i className="fas fa-map-marker-alt"> </i> 123 Main Street,
                Anytown India
              </li>
              <li>
                <i className="fas fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@ATTIREX.com
              </li>
            </ul>
          </div>
          <div className="footer-section links">
            <h2 className="footer-heading">Links</h2>
            <ul className="links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="https://github.com/chhakuli123">About Us</Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/chhakuli-zingare-322986234">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2 className="footer-heading">Follow Us</h2>
            <ul className="social-list">
              <li>
                <Link target="_blank" to="https://github.com/chhakuli123">
                  <GitHubIcon className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://twitter.com/ChhakuliZingare">
                  <TwitterIcon className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/chhakuli_zingare"
                >
                  <InstagramIcon className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/chhakuli-zingare-322986234"
                >
                  <LinkedInIcon className="nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="desk-footer-bottom">
          <p>
            &copy; 2023 Ecommerce Inc. All rights reserved By Chhakuli Zingare
          </p>
        </div>
      </footer>
      {/* ------------Mobile footer------------------- */}
      <footer className="mobile-footer">
        <p className="footer-header">
          Made with <span className="footer-logo">{`</>`}</span> by Chhakuli
          Zingare
        </p>
        <div className="social-icons-container">
          <Link
            className="social-icons"
            target="_blank"
            to="https://github.com/chhakuli123"
          >
            <GitHubIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://twitter.com/ChhakuliZingare"
          >
            <TwitterIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://www.instagram.com/chhakuli_zingare"
          >
            <InstagramIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons"
            target="_blank"
            to="https://www.linkedin.com/in/chhakuli-zingare-322986234"
          >
            <LinkedInIcon className="social-icon" />
          </Link>
        </div>
        <p className="footer-bottom">© 2023 | ATTIREX</p>
      </footer>
    </>
  );
}

export { Footer };
