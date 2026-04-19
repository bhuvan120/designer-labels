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
        <p className="card-price">{design.price}</p>
        <a className="product-order-link" href={orderUrl} target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
        <button type="button" className="product-image-link" onClick={() => onSelect(design)}>
          View Details
        </button>
      </div>
    </article>
  )
}
