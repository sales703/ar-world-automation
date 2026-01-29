import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <video className="hero-video-bg" autoPlay loop muted>
          <source src="/assets/About.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            At AR World Automation, we deliver cutting-edge solutions across
            turbines, energy, marine, electrical automation, oil & gas, EV, and
            solar—driving efficiency, reliability, and sustainable innovation
            for industries worldwide. Power your future with us.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <h2>
          AR World Automation is a leading provider of high-quality solutions in
          gas turbines, oil & gas, marine, and electrical industries.
        </h2>
        <div className="intro-content-wrapper">
          <div className="intro-text-left">
            <p>
              At AR World Automation, we take pride in our expertise and
              forward-thinking approach. Our team of passionate professionals is
              driven by innovation, energy, and a commitment to delivering
              cutting-edge solutions that maximize operational efficiency,
              sustainability, and long-term performance for our clients. As a
              trusted industry partner, AR World Automation specializes in gas
              turbines, oil & gas, marine, EV, and electrical automation. With a
              focus on reliability, advanced technology, and sustainable growth,
              we provide tailored products and services that empower industries
              worldwide. Backed by deep knowledge and unwavering motivation, AR
              World Automation is dedicated to excellence—driving progress,
              efficiency, and a smarter future for global industries.
            </p>
          </div>
          <div className="intro-image-right">
            <img src="/assets/team.jpg" alt="About Us Introduction" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-core-values">
        <h2>Our Expertise</h2>
        <div className="core-values-grid">
          <div className="core-value-card">
            <h3>Experience & Reliability</h3>
            <p>
              With over a decade of experience in the Electrical &
              Instrumentation (E&I) field, we provide reliable, timely service
              and support for urgent MRO (Maintenance, Repair, and Operations)
              spare part needs, ensuring your operations stay on track.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Strategic Innovation</h3>
            <p>
              We don't just follow trends; we set them. Our team continuously
              evaluates new technologies and industry advancements to deliver
              forward-thinking solutions that give our clients a competitive
              advantage.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Client Partnership</h3>
            <p>
              We see our clients as long-term partners, not just customers. Our
              approach is to build strong relationships by offering
              personalized, tailored solutions that directly address your unique
              challenges and goals.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Quality & Integrity</h3>
            <p>
              Our commitment to excellence is non-negotiable. We operate with
              the highest standards of quality, honesty, and transparency,
              ensuring every project is handled with professionalism and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </div>
  );
};

export default About;
