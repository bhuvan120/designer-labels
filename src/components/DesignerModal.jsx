export default function DesignerModal({ design, onClose }) {
  if (!design) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>

        <img src={design.image} alt={design.title} className="modal-image" />

        <div className="modal-content">
          <p className="eyebrow">{design.category}</p>
          <h2 id="modal-title">{design.title}</h2>
          <p>{design.fullDescription}</p>

          <div className="designer-note">
            <span>Designer</span>
            <strong>{design.designer}</strong>
            <p>
              Contact Niharika to buy this piece, request a custom product, or discuss fashion
              design work.
            </p>
          </div>

          <button type="button" className="button button-primary">
            Contact Niharika
          </button>
        </div>
      </article>
    </div>
  )
}
