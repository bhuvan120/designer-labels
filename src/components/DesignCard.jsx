export default function DesignCard({ design, onSelect }) {
  return (
    <button type="button" className="design-card" onClick={() => onSelect(design)}>
      <span className="card-image-wrap">
        <img src={design.image} alt={design.title} className="card-image" />
      </span>
      <span className="card-body">
        <span className="card-meta">
          <span>{design.category}</span>
          <span>{design.designer}</span>
        </span>
        <span className="card-title">{design.title}</span>
        <span className="card-copy">{design.shortDescription}</span>
      </span>
    </button>
  )
}
