import React, { useEffect, useState, useCallback } from "react";
import "../styles/Gallery.css";

/*
  Showroom gallery. Images live in /public/assets/gallery.
  To add more photos: drop the file in that folder and add its filename below.
*/
const photos = Array.from(
  { length: 45 },
  (_, i) => `photo-${String(i + 1).padStart(2, "0")}.jpg`
);

const Gallery = () => {
  const [active, setActive] = useState(null); // index of open image, or null

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length
      ),
    []
  );

  // keyboard controls for the lightbox
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section className="gallery-page">
      <div className="gallery-head">
        <span className="gallery-eyebrow">Our Showroom</span>
        <h1>Gallery</h1>
        <p>
          A closer look at our products, projects and installations — explore
          our work in industrial automation.
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className="gallery-item"
            style={{ animationDelay: `${(i % 12) * 55}ms` }}
            onClick={() => setActive(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={`/assets/gallery/${src}`}
              alt={`AR World Automation showroom ${i + 1}`}
              loading="lazy"
            />
            <span className="gallery-overlay" aria-hidden="true">
              <span className="gallery-zoom">＋</span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="gallery-lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="gl-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="gl-nav gl-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <figure className="gl-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/assets/gallery/${photos[active]}`}
              alt={`AR World Automation showroom ${active + 1}`}
            />
            <figcaption>
              {active + 1} / {photos.length}
            </figcaption>
          </figure>
          <button
            className="gl-nav gl-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
