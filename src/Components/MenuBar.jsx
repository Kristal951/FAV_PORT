import React, { useState, useEffect } from "react";
import { Links } from "./"; // Assumes Links = [{ id, label, path }]
import "./styles/MenuBar.scss";
import Logo_Trans from '../assets/LOGO_trans.png'

const MenuBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false); 
  };

  return (
    <nav className="menu-bar">
      <div className="logo">
        <img src={Logo_Trans} alt="" />
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        {Links.map((navlink) => (
          <a
            key={navlink.id}
            href={navlink.path}
            className={`nav-link ${activeLink === navlink.id ? "active" : ""}`}
            onClick={() => handleLinkClick(navlink.id)}
          >
            {navlink.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MenuBar;
