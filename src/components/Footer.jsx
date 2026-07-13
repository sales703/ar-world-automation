import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import { BsChatText } from 'react-icons/bs';
import '../styles/Footer.css';

export default function Footer() {
  const phoneNumber = "+919208775450";
  const emailAddress = "arworldautomation.in@gmail.com";
  const whatsappNumber = "919208775450";
  const whatsappMessage = "Hello, I'd like to chat with you!";

  return (
    <>
      {/* Contact Section */}
      <section className="footer-contact-section">
        <div className="footer-contact-container">
          <h2 className="footer-contact-title">
            WE'RE HERE WHEN YOU NEED US
          </h2>
          <div className="footer-contact-grid">
            
            {/* Call Us Card */}
            <a href={`tel:${phoneNumber}`} className="footer-contact-card">
              <FiPhone className="footer-contact-icon" />
              <h3 className="footer-contact-heading">CALL US</h3>
              <p className="footer-contact-text">Speak to an Expert Now</p>
            </a>
            
            {/* Chat with Us Card (WhatsApp) */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-contact-card"
            >
              <BsChatText className="footer-contact-icon" />
              <h3 className="footer-contact-heading">CHAT WITH US</h3>
              <p className="footer-contact-text">We're Online and Ready to Help!</p>
            </a>

            {/* Email Us Card */}
            <a href={`mailto:${emailAddress}`} className="footer-contact-card">
              <FiMail className="footer-contact-icon" />
              <h3 className="footer-contact-heading">EMAIL US</h3>
              <p className="footer-contact-text">Say Hello in Our Inbox!</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer-main-section">
        <div className="footer-main-container">
          <div className="footer-grid">

            {/* Column 1: Logo & Socials */}
            <div className="footer-column footer-logo">
              <div className="site-logo">
                <img src="/assets/logo-full.jpeg" alt="AR World Automation - Automation That Moves The World" />
              </div>
              <p className="footer-logo-description">
                Your one-stop solution for industrial automation parts, offering global delivery and trusted sourcing.
              </p>
              <div className="footer-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><a href="#">Fast Global Delivery</a></li>
                <li><a href="#">Authentic Parts Sourcing</a></li>
                <li><a href="#">Obsolete Part Solutions</a></li>
                <li><a href="#">24/7 Support</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-list">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-list">
                <li><a href="mailto:arworldautomation.in@gmail.com">arworldautomation.in@gmail.com</a></li>
                <li><a href="tel:+1234567890">+91 92087 75450</a></li>
                <li><p>Office No. S-01, Second Floor, D-42, Sector-2, Near Metro Station 15 &amp; 16, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301</p></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="footer-bottom-text">
            © 2025 AR World Automation. All Rights Reserved. Design and Developed By{" "}
            <a
              href="https://www.linkedin.com/in/abid-raza-5583201a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Abid Raza
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
