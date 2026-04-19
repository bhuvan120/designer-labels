import { getProductOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

export default function DesignCard({ design, onSelect }) {
  const orderUrl = getWhatsAppUrl(getProductOrderMessage(design))

  return (
    <article className="design-card">
      <button type="button" className="card-image-wrap" onClick={() => onSelect(design)}>
        <img src={design.image} alt={design.title} className="card-image" />
      </button>

      <div className="card-body">
        <button type="button" className="card-title" onClick={() => onSelect(design)}>
          {design.title}
        </button>
        <p className="product-price">{design.price}</p>
        <div className="card-actions">
          <a className="button button-primary button-small" href={orderUrl} target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
          <button type="button" className="button button-secondary button-small" onClick={() => onSelect(design)}>
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}
