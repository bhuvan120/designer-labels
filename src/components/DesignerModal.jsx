import { getProductOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

export default function DesignerModal({ design, onClose }) {
  if (!design) {
    return null
  }

  const orderUrl = getWhatsAppUrl(getProductOrderMessage(design))

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>

        <img src={design.image} alt={design.title} className="modal-image" />

        <div className="modal-content">
          <p className="eyebrow">{design.category}</p>
          <h2 id="modal-title">{design.title}</h2>
          <p className="modal-price">
            {design.price} | {design.shipNote}
          </p>
          <p>{design.fullDescription}</p>

          {design.gallery?.length > 1 && (
            <div className="modal-gallery">
              {design.gallery.map((image, index) => (
                <img
                  key={`${design.id}-gallery-${index + 1}`}
                  src={image}
                  alt={`${design.title} ${index + 1}`}
                  className="modal-gallery-image"
                />
              ))}
            </div>
          )}

          <div className="designer-note">
            <span>Designer</span>
            <strong>{design.designer}</strong>
            <p>
              Contact Niharika to buy this piece, request a custom product, or discuss fashion
              design work.
            </p>
          </div>

          <a className="button button-primary" href={orderUrl} target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
        </div>
      </article>
    </div>
  )
}
