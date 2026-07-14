import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
// import WhatsappButton from "./WhatsappButton"; // Assuming you have this
// ✅ Import the Gmail button if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close menu automatically on resize > mobile breakpoint
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => {
    // close menu after clicking a link (on mobile)
    if (window.innerWidth <= 768) setOpen(false);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="site-topbar">
        <div className="top-left">📞 +91 9208775450</div>
        <div className="top-right">
          {/* ✅ Place your new button components here */}
          
          {/* You can place the WhatsApp button here as well if you want it in the top bar */}
          {/* <WhatsappButton /> */}
        </div>
      </div>

      <header className="site-navbar">
        <div className="site-inner">
          <div className="site-logo">
            <img src="/assets/logo-full.jpeg" alt="AR World Automation - Automation That Moves The World" />
          </div>

          {/* hamburger (visible on mobile) */}
          <button
            className={`site-hamburger ${open ? "is-active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>

          {/* nav - desktop shows as row, mobile hidden until .open */}
          <nav className={`site-nav ${open ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleLinkClick}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={handleLinkClick}>
                  OFFER PRODUCT
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={handleLinkClick}>
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={handleLinkClick}>
                  FAQ'S
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleLinkClick}>
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
