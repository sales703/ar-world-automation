import React, { useState } from "react";
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>Product Offerings</h1>
        <p>Explore our extensive range of industrial automation spare parts.</p>
      </section>

      {/* Categories Section */}
      <div className="categories-section">
        <h3>Categories</h3>
        <div className="categories-grid">
          {categoryData.map((cat, index) => (
            <div
              key={index}
              className="category-wrapper"
              onClick={() => handleCategoryChange(cat.name)}
            >
              <div
                className={`category-card ${
                  selectedCategory === cat.name ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>
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
