import React from "react";
import "../styles/GlobalDelivery.css";

export default function GlobalDelivery() {
  return (
    <section className="global-delivery-section">
      <div className="global-delivery-container">
        {/* Left Text */}
        <div className="global-delivery-text">
          <h2 className="global-delivery-title">
            GLOBAL DELIVERY YOU CAN COUNT ON
          </h2>
          <p className="global-delivery-paragraph">
            We know how critical fast turnaround is when it comes to industrial automation. That's why we provide efficient order processing and on-time global delivery all the way from initial order to installation support.
          </p>
          <p className="global-delivery-paragraph">
            From order confirmation, procurement, system configuration, and testing to secure packaging and worldwide logistics, we ensure your automation solutions arrive exactly when and where you need them.
          </p>
          <p className="global-delivery-paragraph bold">
            Trust AR  World Automation  to deliver with precision -{'>'} because downtime isn't an option.
          </p>
        </div>

        {/* Right Video */}
        <div className="global-delivery-video-wrapper">
          <video
            className="global-delivery-video"
            src="/assets/globe.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
