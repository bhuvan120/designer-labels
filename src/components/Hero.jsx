export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="hero-section">
      <img
        src="/designs/aqua-blue-womens-model.jpeg"
        alt=""
        className="hero-image"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">Niharika designer label</p>
        <h1>Niharika showcases her label, products, and design work.</h1>
        <p className="hero-copy">
          A portfolio of original garments, fabric studies, and finished label pieces by Niharika.
          Explore the work, then contact her for orders, custom outfits, or design collaborations.
        </p>
        <div className="hero-actions">
          <button type="button" className="button button-primary" onClick={onExploreClick}>
            Explore Designs
          </button>
          <a href="#join" className="button button-secondary">
            Contact Niharika
          </a>
        </div>
      </div>
    </section>
  )
}
