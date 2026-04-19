import { useRef } from 'react'
import DesignCard from './DesignCard.jsx'

function ArrowIcon({ direction }) {
  return (
    <svg className="carousel-arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
      {direction === 'left' ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  )
}

export default function ProductCarousel({
  designs,
  eyebrow,
  title,
  description,
  onSelectDesign,
  onShowAllProducts,
}) {
  const trackRef = useRef(null)

  const scrollByAmount = (direction) => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const amount = Math.max(track.clientWidth * 0.8, 280)
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section product-carousel-section">
      <div className="section-header product-carousel-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="product-carousel-actions">
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll products left"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll products right"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="product-carousel-track">
        {designs.map((design) => (
          <div key={design.id} className="product-carousel-item">
            <DesignCard design={design} onSelect={onSelectDesign} />
          </div>
        ))}
      </div>

      <div className="showcase-footer">
        <button type="button" className="button button-secondary" onClick={onShowAllProducts}>
          View All Products
        </button>
      </div>
    </section>
  )
}
