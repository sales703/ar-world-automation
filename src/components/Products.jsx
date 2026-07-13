import React, { useState, useEffect, useRef } from "react";
import "../styles/Product.css";
import TrustedBy from "./Trusted";

// Categories with images
const categoryData = [
  { name: "Air Cylinder", image: "/assets/Categories/1.jpg" },
  { name: "Valve Controller", image: "/assets/Categories/2.png" },
  { name: "Air Diaphragm Pump", image: "/assets/Categories/3.jpeg" },
  { name: "Bearing Unit", image: "/assets/Categories/15.jpeg" },
  { name: "Air Service Unit", image: "/assets/Categories/4.jpeg" },
  { name: "Counter & Timer", image: "/assets/Categories/5.jpeg" },
  { name: "Electrical", image: "/assets/Categories/6.jpeg" },
  { name: "Fitting and Tube", image: "/assets/Categories/7.jpeg" },
  { name: "Gearbox & Motor", image: "/assets/Categories/8.png" },
  { name: "Hydraulics", image: "/assets/Categories/9.jpeg" },
  { name: "Linear Bearing", image: "/assets/Categories/10.jpeg" },
  { name: "Mechanical Valve", image: "/assets/Categories/11.jpeg" },
  { name: "Power Flex", image: "/assets/Categories/12.jpeg" },
  { name: "Simatic s7 - 1200", image: "/assets/Categories/13.jpeg" },
  { name: "Allen Bradley", image: "/assets/Categories/14.jpeg" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const node = gridRef.current;
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
      { threshold: 0.08 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="products-page">
      <section
        className="products-hero"
        style={{ backgroundImage: "url(/assets/Featured/plc.jpg)" }}
      >
        <div className="products-hero-overlay" aria-hidden="true"></div>
        <div className="products-hero-inner">
          <span className="products-hero-eyebrow">Welcome to AR World Automation</span>
          <h1>Explore Our Product Range</h1>
          <p>
            A complete portfolio of industrial automation spare parts &mdash;
            sourced globally, delivered with trust, and built to keep your
            operations running.
          </p>
          <div className="products-hero-stats">
            <div className="phs-item">
              <strong>500+</strong>
              <span>Product Lines</span>
            </div>
            <div className="phs-item">
              <strong>Global</strong>
              <span>Sourcing &amp; Delivery</span>
            </div>
            <div className="phs-item">
              <strong>Trusted</strong>
              <span>Genuine Brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="categories-head">
          <span className="categories-eyebrow">Browse by Category</span>
          <h3>Our Categories</h3>
          <p className="categories-sub">
            Tap a category to explore &mdash; every part you need for control,
            motion, sensing, and more.
          </p>
        </div>

        <div
          className={`categories-grid ${visible ? "is-visible" : ""}`}
          ref={gridRef}
        >
          {categoryData.map((cat, index) => (
            <div
              key={index}
              className={`category-wrapper ${
                selectedCategory === cat.name ? "active" : ""
              }`}
              style={{ transitionDelay: `${index * 55}ms` }}
              onClick={() => handleCategoryChange(cat.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCategoryChange(cat.name)
              }
            >
              <div className="category-card">
                <div
                  className="category-img"
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
                <span className="category-shine" aria-hidden="true"></span>
              </div>
              <p className="category-label">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <TrustedBy />
    </div>
  );
};

export default Products;
