import React, { useEffect, useRef, useState } from "react";
import "../styles/PaymentShipping.css";

/*
  Express Payment & Global Delivery — trust strip.
  Logos live in /public/assets/payments as scalable SVGs (no quality loss at any size).
*/
const payments = [
  { src: "/assets/payments/paypal.svg", alt: "PayPal" },
  { src: "/assets/payments/visa.svg", alt: "Visa" },
  { src: "/assets/payments/mastercard.svg", alt: "Mastercard" },
  { src: "/assets/payments/westernunion.svg", alt: "Western Union" },
  { src: "/assets/payments/hsbc.svg", alt: "HSBC" },
  { src: "/assets/payments/escrow.svg", alt: "Escrow" },
];

const shipping = [
  { src: "/assets/payments/dhl.svg", alt: "DHL" },
  { src: "/assets/payments/fedex.svg", alt: "FedEx" },
  { src: "/assets/payments/ups.svg", alt: "UPS" },
  { src: "/assets/payments/tnt.svg", alt: "TNT" },
  { src: "/assets/payments/sfexpress.svg", alt: "SF Express" },
  { src: "/assets/payments/ems.svg", alt: "EMS" },
];

const LogoGrid = ({ items }) => (
  <div className="ps-grid">
    {items.map((logo) => (
      <div className="ps-tile" key={logo.alt}>
        <img src={logo.src} alt={logo.alt} className="ps-logo" loading="lazy" />
      </div>
    ))}
  </div>
);

export default function PaymentShipping() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`payment-shipping ${visible ? "is-visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ps-title"
    >
      <div className="ps-head">
        <span className="ps-eyebrow">Express Payment &middot; Global Delivery</span>
        <h2 id="ps-title">Secure Payment &amp; Worldwide Shipping</h2>
        <p>
          Pay the way that suits you and receive your order anywhere in the world —
          we work with the most trusted payment providers and global logistics
          carriers.
        </p>
      </div>

      <div className="ps-banner">
        <figure className="ps-photo ps-photo-air">
          <img
            src="/assets/freight/air-freight.jpg"
            alt="Cargo pallets being loaded onto a wide-body freight aircraft"
            loading="lazy"
          />
          <figcaption>
            <span className="ps-photo-kicker">Air Freight</span>
            <span className="ps-photo-title">Fast worldwide air delivery</span>
          </figcaption>
        </figure>
        <figure className="ps-photo ps-photo-road">
          <img
            src="/assets/freight/road-freight.jpg"
            alt="DHL delivery truck transporting goods by road"
            loading="lazy"
          />
          <figcaption>
            <span className="ps-photo-kicker">Road &amp; Courier</span>
            <span className="ps-photo-title">Door-to-door to 100+ countries</span>
          </figcaption>
        </figure>
      </div>

      <div className="ps-groups">
        <div className="ps-group">
          <h3 className="ps-group-label">Secure Payment</h3>
          <LogoGrid items={payments} />
        </div>

        <div className="ps-divider" aria-hidden="true"></div>

        <div className="ps-group">
          <h3 className="ps-group-label">Worldwide Shipping</h3>
          <LogoGrid items={shipping} />
        </div>
      </div>
    </section>
  );
}
