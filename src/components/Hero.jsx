import React from "react";
import "../styles/Hero.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide" style={{ backgroundImage: `url(/assets/hero1.jpg)` }}>
            <div className="hero-content">
              <h1>Your Automation Partner</h1>
              <p>Supplying automation parts from China to Dubai with ease</p>
              <a href="#contact" className="btn">Get in Touch</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide" style={{ backgroundImage: `url(/assets/hero2.jpg)` }}>
            <div className="hero-content">
              <h1>Trusted Sourcing</h1>
              <p>Connecting you with reliable Chinese suppliers</p>
              <a href="#services" className="btn">Explore Services</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero-slide" style={{ backgroundImage: `url(/assets/hero3.jpg)` }}>
            <div className="hero-content">
              <h1>Global Reach</h1>
              <p>Delivering parts worldwide at competitive prices</p>
              <a href="#about" className="btn">Learn More</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
