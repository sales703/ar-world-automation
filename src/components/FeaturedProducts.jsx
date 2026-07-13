import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FeaturedProducts.css";
import { FaMicrochip, FaFlask } from "react-icons/fa";
import { MdDesktopWindows, MdSensors } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

/*
  Featured product categories.
  To use a real photo instead of the gradient + icon, add an `image` field
  e.g. image: "/assets/Featured/plc.jpg" — it will be used as the card background.
*/
const featured = [
  {
    name: "PLC and RIO Modules",
    desc: "Programmable controllers designed for ease of use with a wide range of I/O expansion modules and communication options.",
    icon: <FaMicrochip />,
    image: "/assets/Featured/plc.jpg",
    gradient: "linear-gradient(135deg, #12315f 0%, #1a4d94 60%, #2f7ad1 100%)",
    span: "large",
  },
  {
    name: "HMI & SCADA Packages",
    desc: "Industrial displays for faster, deeper insights and operator interfaces, along with SCADA packages for larger applications.",
    icon: <MdDesktopWindows />,
    image: "/assets/Featured/hmi.jpg",
    gradient: "linear-gradient(135deg, #0d2a4d 0%, #16609c 55%, #1fb6c9 100%)",
    span: "large",
  },
  {
    name: "VFD & Servo Systems",
    desc: "A wide range of variable-speed drives offering power and reliability to your motor control solutions.",
    icon: <GiElectric />,
    image: "/assets/Featured/vfd.jpg",
    gradient: "linear-gradient(135deg, #17325e 0%, #2a5aa0 60%, #4b86d8 100%)",
    span: "small",
  },
  {
    name: "Process Sensors",
    desc: "A comprehensive selection of electronic process sensors tailored for diverse industrial applications.",
    icon: <MdSensors />,
    image: "/assets/Featured/sensors.jpg",
    gradient: "linear-gradient(135deg, #10365c 0%, #1a4d94 55%, #33a0b8 100%)",
    span: "small",
  },
  {
    name: "Lab Instruments & Consumables",
    desc: "High-quality lab instruments and consumables — essential tools for scientific research and educational institutions.",
    icon: <FaFlask />,
    image: "/assets/Featured/lab.jpg",
    gradient: "linear-gradient(135deg, #0f2f56 0%, #205494 55%, #46c2a5 100%)",
    span: "small",
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
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
      className={`featured-products ${visible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="featured-head">
        <span className="featured-eyebrow">What We Offer</span>
        <h2>Our Product Range</h2>
        <p>
          A complete portfolio of industrial automation solutions — from control
          hardware to laboratory instruments.
        </p>
      </div>

      <div className="featured-grid">
        {featured.map((item, index) => (
          <article
            key={item.name}
            className={`fp-card fp-${item.span}`}
            style={{ transitionDelay: `${index * 90}ms` }}
            onClick={() => navigate("/products")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/products")}
          >
            <span
              className="fp-bg"
              aria-hidden="true"
              style={{
                background: item.image
                  ? `url(${item.image}) center/cover no-repeat`
                  : item.gradient,
              }}
            ></span>
            <span className="fp-sweep" aria-hidden="true"></span>
            <div className="fp-icon" aria-hidden="true">
              {item.icon}
            </div>
            <div className="fp-body">
              <h3>{item.name}</h3>
              <p className="fp-desc">{item.desc}</p>
              <span className="fp-link">
                Explore <span className="fp-arrow">→</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
