import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import "../index.css"; // 👈 linked CSS file

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section company-details">
            <h1 className="footer-title">
              <FiShoppingBag size="30" />
              PRAVASA
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          <div className="footer-section footer-links-container">
            <div className="footer-links-block">
              <h2 className="footer-subtitle">Important Links</h2>
              <ul className="footer-links-list">
                {FooterLinks.map((link) => (
                  <li className="footer-link" key={link.title}>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links-block">
              <h2 className="footer-subtitle">Links</h2>
              <ul className="footer-links-list">
                {FooterLinks.map((link) => (
                  <li className="footer-link" key={link.title}>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-contact-social">
              <div className="footer-social">
                <a href="#"><FaInstagram className="footer-icon" /></a>
                <a href="#"><FaFacebook className="footer-icon" /></a>
                <a href="#"><FaLinkedin className="footer-icon" /></a>
              </div>
              <div className="footer-contact-info">
                <div className="footer-contact-row">
                  <FaMapLocationDot />
                  <p>Shivpuri, Madhya Pradesh</p>
                </div>
                <div className="footer-contact-row">
                  <IoCall />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
