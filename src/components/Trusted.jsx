// src/components/TrustedBy.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "../styles/Truste.css";

export default function TrustedBy() {
  const logos = [
    { src: "/assets/trustedBy/1.jpeg", alt: "PSA The World's Port of Call" },
    { src: "/assets/trustedBy/2.jpeg", alt: "Index-Cool since 1977" },
    { src: "/assets/trustedBy/3.jpeg", alt: "Soon Lian Holdings" },
    { src: "/assets/trustedBy/4.jpeg", alt: "GSPP" },
    { src: "/assets/trustedBy/5.jpeg", alt: "Tuas Power Supply" },
    { src: "/assets/trustedBy/6.jpeg", alt: "Another Company" },
  ];

  return (
    <section className="trusted-by-section">
      <h2 className="trusted-by-heading">Our Partners</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        className="logo-swiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-slide">
              <img src={logo.src} alt={logo.alt} className="company-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
