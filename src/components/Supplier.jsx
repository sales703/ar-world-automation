import React from "react";
import "../styles/Suppliers.css";

export default function Supplier() {
  return (
    <section className="supplier-section">
      <div className="supplier-container">
        <div className="supplier-flex">

          {/* Left Text Column */}
          <div className="supplier-left">
            <h2 className="supplier-title">
              TRUSTED GLOBAL SUPPLIER OF INDUSTRIAL AUTOMATION SPARE PARTS
            </h2>
            <p className="supplier-text">
              At AR World Automation, we provide high-quality new and obsolete automation spare parts to industries across the globe. From Singapore to India and over 100 countries worldwide, we ensure fast, reliable, and hassle-free delivery. Whether you need current models or hard-to-find discontinued parts, our mission is to keep your business running without interruptions. With trusted service and global reach, we make automation simple, accessible, and dependable.
            </p>
            <p className="supplier-text">
              Our customers span across industries such as oil & gas, marine, manufacturing,
              pharmaceuticals, power generation, water treatment, and semiconductor — where
              every second of downtime counts.
            </p>
            <p className="supplier-text">
              We support them with genuine OEM and replacement spares from leading
              automation brands such as Allen-Bradley, Siemens, ABB, B&R, Mitsubishi, Beckhoff,
              Fuji Electric, Omron, Yokogawa, Phoenix Contact, Honeywell, Fanuc, Lenze,
              Schneider Electric, GE, Danfoss, Yaskawa, Indramat, Emerson, KUKA and many
              more.
            </p>
            <p className="supplier-text">
              Our global automation management capabilities mean we can source and ship critical industrial automation components within 24 hours to 14 days, anywhere in the world — including Southeast Asia, Australia, Europe, and the Middle East.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="supplier-right">
            <div className="supplier-image-wrapper">
              <img
                src="/assets/Supplier.jpg"
                alt="Industrial Automation Spare Parts"
                className="supplier-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
