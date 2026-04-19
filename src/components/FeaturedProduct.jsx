import { getProductOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

export default function FeaturedProduct({ design, onSelectDesign }) {
  if (!design) {
    return null
  }

  const orderUrl = getWhatsAppUrl(getProductOrderMessage(design))

  return (
    <section className="section featured-product">
      <div className="featured-media">
        <img src={design.image} alt={design.title} />
      </div>
      <div className="featured-copy">
        <p className="eyebrow">Featured product</p>
        <h2>{design.title}</h2>
        <p className="featured-price">{design.price}</p>
        <p>{design.fullDescription}</p>
        <dl className="product-specs">
          <div>
            <dt>Order mode</dt>
            <dd>{design.shipNote}</dd>
          </div>
          <div>
            <dt>Designer</dt>
            <dd>{design.designer}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{design.category}</dd>
          </div>
        </dl>
        <div className="featured-actions">
          <a className="button button-primary" href={orderUrl} target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
          <button type="button" className="button button-secondary" onClick={() => onSelectDesign(design)}>
            View Details
          </button>
        </div>
      </div>
    </section>
  )
}
