import React, { useState, useEffect, useRef } from 'react';
import '../styles/WhyChoose.css';

// Client testimonial data
const testimonials = [
  { name: 'Shilpa Sharma', rating: 5, review: 'They did a great and thorough job... no wires showing, everything was put under the false roofing! The team were so good, courteous and well-mannered. They worked so neatly and on time.' },
  { name: 'Ahmed Al Mansoori', rating: 5, review: 'Excellent service from start to finish. The technicians arrived on time and explained everything clearly. Very professional work, highly recommended in Dubai.' },
  { name: 'John Miller', rating: 5, review: 'Really solid experience. The crew was professional, quick, and respectful of my home. Couldn’t have asked for a smoother process.' },
  { name: 'Mohammed Al Qahtani', rating: 4, review: 'The team was very polite and skilled. The installation was smooth, though I wish the work finished a little faster. Still, very satisfied overall.' },
  { name: 'Rajesh Verma', rating: 5, review: 'Amazing service! Everything was done perfectly, and they cleaned up afterwards as well. The team knew their work really well.' },
  { name: 'Emily Johnson', rating: 5, review: 'Great experience! The staff was friendly and professional. They left the place spotless after finishing the work.' },
  { name: 'Fatima Al Suwaidi', rating: 5, review: 'The staff was respectful and well-trained. They completed the installation with no mess and made sure everything worked before leaving.' },
  { name: 'Michael Brown', rating: 4, review: 'The work quality was top-notch, though the appointment time was delayed a bit. Still very happy with the outcome.' },
  { name: 'Ali Hassan', rating: 5, review: 'I am very impressed with their service. The team was knowledgeable and fixed everything properly. They even explained how to maintain it well.' },
  { name: 'Sana Sheikh', rating: 5, review: 'Very smooth process from booking to execution. The workers were polite and efficient, and the price was fair for the quality of work.' },
  { name: 'David Wilson', rating: 5, review: 'Quick, reliable, and professional. Everything looks neat and works perfectly. Would definitely recommend them to friends.' },
  { name: 'Huda Al Harbi', rating: 4, review: 'Very happy with the service. The team was well-behaved and skilled. Only small delay, but otherwise perfect installation.' },
  { name: 'Rohit Malhotra', rating: 5, review: 'The best service I have experienced in a long time. The finishing is so clean that you cannot even tell any work was done. Very professional.' },
  { name: 'Abdul Rahman', rating: 5, review: 'Outstanding work! The technicians knew exactly what they were doing. Very courteous and respectful, which I truly appreciated.' }
];

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? 'star-filled' : 'star-empty'}`}>
        ★
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

// 🎯 Custom Hook for Count Up Animation
const useCountUp = (end) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            setCount(Math.min(end, Math.floor((progress / duration) * end)));
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [end]);

  return { count, ref };
};

// 🌍 Main Component
export default function WhyChoose() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page on resize
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Counters
  const partsCount = useCountUp(5246);
  const customersCount = useCountUp(9494);
  const countriesCount = useCountUp(66);

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        {/* Why Choose Header */}
        <div className="why-choose-header">
          <div className="why-choose-title-wrapper">
            <h2 className="why-choose-title">
              WHY CHOOSE <br /> AR WORLD AUTOMATION?
            </h2>
          </div>
          <div className="why-choose-counts">
            <div className="count-item">
              <span ref={partsCount.ref} className="count-number">{partsCount.count}+</span>
              <p className="count-label">Automation Parts</p>
            </div>
            <div className="count-item">
              <span ref={customersCount.ref} className="count-number">{customersCount.count}+</span>
              <p className="count-label">Happy Customers</p>
            </div>
            <div className="count-item">
              <span ref={countriesCount.ref} className="count-number">{countriesCount.count}+</span>
              <p className="count-label">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="section-header">
              <h2>What Our Clients Say</h2>
            </div>

            <div className="slider-wrapper">
              <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, pageIndex) => (
                  <div key={pageIndex} className="slide-page">
                    {testimonials
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((testimonial, idx) => (
                        <div key={idx} className="testimonial-card">
                          <h3>{testimonial.name}</h3>
                          <StarRating rating={testimonial.rating} />
                          <p>{testimonial.review}</p>
                          
                        </div>
                      ))}
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button onClick={prevSlide} className="nav-btn prev">&#10094;</button>
              <button onClick={nextSlide} className="nav-btn next">&#10095;</button>

              {/* Pagination Dots */}
              <div className="dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
